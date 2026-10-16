import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const siteJs = fs.readFileSync(new URL("../assets/js/site.js", import.meta.url), "utf8");
const textKeys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]);
const ariaKeys = [...html.matchAll(/data-i18n-aria="([^"]+)"/g)].map((m) => m[1]);
const altKeys = [...html.matchAll(/data-i18n-alt="([^"]+)"/g)].map((m) => m[1]);

function element(attributes = {}) {
  return {
    attributes: { ...attributes },
    textContent: "__untranslated__",
    className: "",
    handlers: {},
    getAttribute(name) { return this.attributes[name] ?? null; },
    setAttribute(name, value) { this.attributes[name] = value; },
    addEventListener(name, handler) { this.handlers[name] = handler; },
    click() { this.handlers.click?.(); },
  };
}

function loadSite(language, preferences = {}) {
  const text = textKeys.map((key) => element({ "data-i18n": key }));
  const aria = ariaKeys.map((key) => element({ "data-i18n-aria": key }));
  const alt = altKeys.map((key) => element({ "data-i18n-alt": key }));
  const controls = Object.fromEntries(
    ["themeToggle", "themeIcon", "languageToggle", "languageLabel", "currentYear"]
      .map((id) => [id, element()])
  );
  const meta = new Map();
  const classes = new Set();
  const root = {
    lang: "en",
    classList: {
      contains: (name) => classes.has(name),
      toggle: (name, enabled) => {
        if (enabled) classes.add(name);
        else classes.delete(name);
      },
    },
  };
  let ready;
  const document = {
    documentElement: root,
    title: "",
    addEventListener: (name, callback) => {
      if (name === "DOMContentLoaded") ready = callback;
    },
    getElementById: (id) => controls[id] ?? null,
    querySelectorAll: (selector) => ({
      "[data-i18n]": text,
      "[data-i18n-aria]": aria,
      "[data-i18n-alt]": alt,
    })[selector] ?? [],
    querySelector: (selector) => {
      if (!meta.has(selector)) meta.set(selector, element());
      return meta.get(selector);
    },
  };
  const storage = new Map(Object.entries(preferences));
  const localStorage = {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  };
  vm.runInNewContext(siteJs, {
    document,
    window: { matchMedia: () => ({ matches: false }) },
    navigator: { language },
    localStorage,
  }, { filename: "site.js" });
  assert.equal(typeof ready, "function");
  ready();
  return { document, text, aria, alt, controls, storage, classes };
}

test("anchors resolve to existing unique IDs", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(anchor), "Missing #" + anchor);
  }
  assert.ok(html.indexOf('id="projects"') < html.indexOf('id="experience"'));
});

test("new-window links retain safe rel attributes", () => {
  for (const [link] of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    assert.match(link, /rel="noopener noreferrer"/);
  }
});

test("Spanish and English render every keyed translation", () => {
  const es = loadSite("es-MX");
  assert.equal(es.document.documentElement.lang, "es");
  assert.equal(es.controls.languageLabel.textContent, "EN");
  assert.equal(es.controls.themeToggle.getAttribute("aria-label"), "Cambiar a modo oscuro");
  for (const node of es.text) {
    assert.notEqual(node.textContent, "__untranslated__", node.getAttribute("data-i18n"));
    assert.ok(node.textContent.length > 0);
  }
  for (const node of es.aria) {
    assert.ok(node.getAttribute("aria-label"), node.getAttribute("data-i18n-aria"));
  }
  for (const node of es.alt) {
    assert.ok(node.getAttribute("alt"), node.getAttribute("data-i18n-alt"));
  }
  es.controls.languageToggle.click();
  assert.equal(es.document.documentElement.lang, "en");
  assert.equal(es.controls.languageLabel.textContent, "ES");
  assert.equal(es.storage.get("language"), "en");
  assert.match(es.document.title, /Backend Developer/);
  es.controls.themeToggle.click();
  assert.ok(es.classes.has("dark"));
  assert.equal(es.storage.get("theme"), "dark");
  es.controls.languageToggle.click();
  assert.equal(es.document.documentElement.lang, "es");
  assert.equal(es.controls.themeToggle.getAttribute("aria-label"), "Cambiar a modo claro");
});

test("saved preference overrides browser and other locales use English", () => {
  const en = loadSite("es-MX", { language: "en", theme: "dark" });
  assert.equal(en.document.documentElement.lang, "en");
  assert.ok(en.classes.has("dark"));
  assert.equal(loadSite("fr-FR").document.documentElement.lang, "en");
});

test("featured projects and skill areas match the selected portfolio", () => {
  assert.match(html, /href="https:\/\/github\.com\/yorologo\/AdFilter"/);
  assert.doesNotMatch(html, /NotYourCube/);
  const es = loadSite("es-MX");
  const translated = new Map(es.text.map((node) => [
    node.getAttribute("data-i18n"), node.textContent,
  ]));
  assert.equal(translated.get("skills-backend"), "Backend y APIs");
  const backendSkills = html.split('data-i18n="skills-backend"')[1]?.split('data-i18n="skills-ai"')[0] ?? "";
  assert.match(backendSkills, />SQL<\/span>/);
  assert.match(backendSkills, />NoSQL<\/span>/);
  assert.doesNotMatch(backendSkills, /PostgreSQL/);
  assert.equal(translated.get("skill-rest-api"), "Desarrollo de APIs REST");
  assert.match(translated.get("mcpProject"), /IA/);
  assert.equal(translated.get("skills-ai"), "IA y automatización");
  assert.equal(translated.get("skills-infra"), "Sistemas e infraestructura");
  assert.equal(translated.get("skill-server-maintenance"), "Mantenimiento de servidores");
  assert.equal(translated.get("adfilterStatus"), "Proyecto en evolución");
  assert.match(translated.get("adfilterProject"), /Pi-hole/);
  const accessible = new Map(es.aria.map((node) => [
    node.getAttribute("data-i18n-aria"), node.getAttribute("aria-label"),
  ]));
  assert.match(accessible.get("aria-open-adfilter-on-github-in-a-new-tab"), /AdFilter/);
});
