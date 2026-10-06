(() => {
  const root = document.documentElement;

  const textPairs = [
    ["Skip to main content", "Saltar al contenido principal"],
    ["Experience", "Experiencia"],
    ["Skills", "Habilidades"],
    ["Education", "Educación"],
    ["Contact", "Contacto"],
    ["Zapopan, Jalisco, Mexico", "Zapopan, Jalisco, México"],
    ["Backend & Cloud Infrastructure Engineer", "Ingeniero de Backend e Infraestructura en la Nube"],
    ["Backend and infrastructure professional with 5+ years of experience in web applications, IT operations, cloud-oriented environments, and technical support. Strong general knowledge across programming languages and a practical focus on reliable systems, automation, troubleshooting, and continuous learning.", "Profesional de backend e infraestructura con más de 5 años de experiencia en aplicaciones web, operaciones de TI, entornos orientados a la nube y soporte técnico. Conocimientos sólidos en diversos lenguajes de programación y un enfoque práctico en sistemas confiables, automatización, resolución de problemas y aprendizaje continuo."],
    ["Email", "Correo"],
    ["Call", "Llamar"],
    ["CV files", "Archivos CV"],
    ["5+ years", "5+ años"],
    ["Current Company", "Empresa actual"],
    ["Languages", "Idiomas"],
    ["About", "Sobre mí"],
    ["I work across backend development, infrastructure, cloud-oriented environments, and senior technical support. My experience includes maintaining web applications, supporting enterprise operations, automating repetitive workflows, and troubleshooting systems where reliability and clear communication matter. I bring a practical engineering mindset: understand the problem, improve the process, and build solutions that are maintainable for the teams that use them.", "Trabajo en desarrollo backend, infraestructura, entornos orientados a la nube y soporte técnico senior. Mi experiencia incluye mantenimiento de aplicaciones web, soporte a operaciones empresariales, automatización de flujos repetitivos y resolución de problemas en sistemas donde la confiabilidad y la comunicación clara son importantes. Aplico un enfoque práctico de ingeniería: entender el problema, mejorar el proceso y construir soluciones mantenibles para los equipos que las utilizan."],
    ["Senior Infra Engineer", "Ingeniero Senior de Infraestructura"],
    ["Sep 2022 - Present", "Sep 2022 - Actualidad"],
    ["Develop and maintain web applications and infrastructure components for operational environments.", "Desarrollo y mantenimiento de aplicaciones web y componentes de infraestructura para entornos operativos."],
    ["Automated large dataset comparison with a Python and Anaconda-based script to support validation and review workflows.", "Automaticé la comparación de grandes conjuntos de datos mediante un script basado en Python y Anaconda para apoyar flujos de validación y revisión."],
    ["Field Tech Senior Representative", "Representante Senior de Tecnología en Campo"],
    ["Built a JavaScript Markdown rendering tool to automate note copying and simplify internal documentation workflows.", "Desarrollé una herramienta de renderizado Markdown en JavaScript para automatizar la copia de notas y simplificar flujos internos de documentación."],
    ["Supported senior field technology operations and IT infrastructure activities for manufacturing-sector clients.", "Brindé soporte a operaciones senior de tecnología en campo y actividades de infraestructura de TI para clientes del sector manufacturero."],
    ["Field Service Engineer", "Ingeniero de Servicio en Campo"],
    ["Inspected, installed, and supported equipment and technology deployments in field service environments.", "Inspeccioné, instalé y di soporte a equipos y despliegues tecnológicos en entornos de servicio en campo."],
    ["Resolved IT infrastructure issues through on-site technical support.", "Resolví incidencias de infraestructura de TI mediante soporte técnico en sitio."],
    ["University of Guadalajara · Temporary contract", "Universidad de Guadalajara · Contrato temporal"],
    ["Sep 2020 - Dec 2020", "Sep 2020 - Dic 2020"],
    ["Supported hardware, software, and server maintenance activities in an institutional technology environment.", "Apoyé actividades de mantenimiento de hardware, software y servidores en un entorno tecnológico institucional."],
    ["Developed a Java application to classify, edit, encrypt, and organize thesis documents.", "Desarrollé una aplicación en Java para clasificar, editar, cifrar y organizar documentos de tesis."],
    ["Programming Languages", "Lenguajes de programación"],
    ["Technologies", "Tecnologías"],
    ["B.S. in Computer Systems Engineering", "Ingeniería en Sistemas Computacionales"],
    ["Activities: Programming workshop lead.", "Actividades: líder de taller de programación."],
    ["Spanish", "Español"],
    ["English", "Inglés"],
    ["Native or bilingual proficiency", "Competencia nativa o bilingüe"],
    ["Basic professional proficiency", "Competencia profesional básica"],
    ["Featured Projects", "Proyectos destacados"],
    ["Secure MCP gateway for controlled delegation to authorized remote systems.", "Gateway MCP seguro para delegar operaciones controladas a sistemas remotos autorizados."],
    ["Local-first price intelligence engine for tracking and comparing delivery-platform prices.", "Motor local-first de inteligencia de precios para rastrear y comparar precios entre plataformas de entrega."],
    ["Python tooling for GameCube metadata scanning, cheat resolution, and validated GCT generation.", "Herramientas en Python para escaneo de metadatos de GameCube, resolución de cheats y generación validada de archivos GCT."],
    ["View on GitHub", "Ver en GitHub"],
    ["Personal CV and portfolio.", "CV y portafolio personal."]
  ];

  const metadata = {
    en: {
      title: "Josué Esaud Gómez González | Backend & Cloud Infrastructure Engineer",
      description: "Professional CV for Josué Esaud Gómez González, Backend & Cloud Infrastructure Engineer in Zapopan, Jalisco, Mexico, focused on backend development, cloud infrastructure, and enterprise support.",
      socialDescription: "Professional portfolio and CV focused on backend development, cloud infrastructure, enterprise support, and automation.",
      twitterDescription: "Backend development, cloud infrastructure, enterprise support, and automation portfolio based in Zapopan, Jalisco, Mexico.",
      imageAlt: "Josué Esaud Gómez González profile photo",
      locale: "en_US"
    },
    es: {
      title: "Josué Esaud Gómez González | Ingeniero de Backend e Infraestructura en la Nube",
      description: "CV profesional de Josué Esaud Gómez González, ingeniero de backend e infraestructura en la nube en Zapopan, Jalisco, México, enfocado en desarrollo backend, infraestructura cloud y soporte empresarial.",
      socialDescription: "Portafolio profesional y CV enfocado en desarrollo backend, infraestructura cloud, soporte empresarial y automatización.",
      twitterDescription: "Portafolio de desarrollo backend, infraestructura cloud, soporte empresarial y automatización en Zapopan, Jalisco, México.",
      imageAlt: "Foto de perfil de Josué Esaud Gómez González",
      locale: "es_MX"
    }
  };

  const ariaPairs = [
    ["Go to top of Josué Esaud Gómez González portfolio", "Ir al inicio del portafolio de Josué Esaud Gómez González"],
    ["Primary navigation", "Navegación principal"],
    ["Contact links", "Enlaces de contacto"],
    ["Send email to Josué Esaud Gómez González", "Enviar correo a Josué Esaud Gómez González"],
    ["Call Josué Esaud Gómez González", "Llamar a Josué Esaud Gómez González"],
    ["Open WhatsApp chat with Josué Esaud Gómez González in a new tab", "Abrir chat de WhatsApp con Josué Esaud Gómez González en una pestaña nueva"],
    ["Open Josué Esaud Gómez González GitHub repositories in a new tab", "Abrir los repositorios de GitHub de Josué Esaud Gómez González en una pestaña nueva"],
    ["Open Josué Esaud Gómez González LinkedIn profile in a new tab", "Abrir el perfil de LinkedIn de Josué Esaud Gómez González en una pestaña nueva"],
    ["Open Josué Esaud Gómez González CV files folder in a new tab", "Abrir la carpeta de archivos del CV de Josué Esaud Gómez González en una pestaña nueva"],
    ["Quick links", "Enlaces rápidos"],
    ["Professional summary", "Resumen profesional"],
    ["Open MCP-Pi on GitHub in a new tab", "Abrir MCP-Pi en GitHub en una pestaña nueva"],
    ["Open DealHunter on GitHub in a new tab", "Abrir DealHunter en GitHub en una pestaña nueva"],
    ["Open NotYourCube on GitHub in a new tab", "Abrir NotYourCube en GitHub en una pestaña nueva"]
  ];

  const altPairs = [
    ["Josué Esaud Gómez González profile photo", "Foto de perfil de Josué Esaud Gómez González"]
  ];

  function getPreference(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function savePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // The page remains functional when storage is unavailable.
    }
  }

  function makePairLookup(pairs) {
    const lookup = new Map();

    for (const [en, es] of pairs) {
      lookup.set(en, { en, es });
      lookup.set(es, { en, es });
    }

    return lookup;
  }

  const textLookup = makePairLookup(textPairs);
  const ariaLookup = makePairLookup(ariaPairs);
  const altLookup = makePairLookup(altPairs);

  function translateTextNodes(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;

    while ((node = walker.nextNode())) {
      const value = node.nodeValue;
      const trimmed = value.trim();
      const pair = textLookup.get(trimmed);

      if (!pair) {
        continue;
      }

      const start = value.indexOf(trimmed);
      node.nodeValue =
        value.slice(0, start) + pair[language] + value.slice(start + trimmed.length);
    }
  }

  function translateAttributes(language) {
    for (const element of document.querySelectorAll("[aria-label]")) {
      const value = element.getAttribute("aria-label");
      const pair = ariaLookup.get(value);

      if (pair) {
        element.setAttribute("aria-label", pair[language]);
      }
    }

    for (const element of document.querySelectorAll("[alt]")) {
      const value = element.getAttribute("alt");
      const pair = altLookup.get(value);

      if (pair) {
        element.setAttribute("alt", pair[language]);
      }
    }
  }

  function setMeta(selector, value) {
    const element = document.querySelector(selector);

    if (element) {
      element.setAttribute("content", value);
    }
  }

  const savedTheme = getPreference("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.classList.toggle("dark", savedTheme ? savedTheme === "dark" : prefersDark);

  const savedLanguage = getPreference("language");
  const browserLanguage = (navigator.language || "en").toLowerCase();
  let currentLanguage =
    savedLanguage === "es" || savedLanguage === "en"
      ? savedLanguage
      : browserLanguage.startsWith("es")
        ? "es"
        : "en";

  root.lang = currentLanguage;

  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const languageToggle = document.getElementById("languageToggle");
    const languageLabel = document.getElementById("languageLabel");
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
      currentYear.textContent = String(new Date().getFullYear());
    }

    function renderTheme(isDark) {
      root.classList.toggle("dark", isDark);

      if (themeIcon) {
        themeIcon.className = isDark ? "bi bi-sun" : "bi bi-moon-stars";
      }

      if (themeToggle) {
        const label =
          currentLanguage === "es"
            ? isDark
              ? "Cambiar a modo claro"
              : "Cambiar a modo oscuro"
            : isDark
              ? "Switch to light mode"
              : "Switch to dark mode";

        themeToggle.setAttribute("aria-label", label);
      }
    }

    function renderLanguage(language) {
      currentLanguage = language;
      root.lang = language;
      translateTextNodes(language);
      translateAttributes(language);

      const meta = metadata[language];
      document.title = meta.title;
      setMeta('meta[name="description"]', meta.description);
      setMeta('meta[property="og:title"]', meta.title);
      setMeta('meta[property="og:description"]', meta.socialDescription);
      setMeta('meta[property="og:locale"]', meta.locale);
      setMeta('meta[property="og:image:alt"]', meta.imageAlt);
      setMeta('meta[name="twitter:title"]', meta.title);
      setMeta('meta[name="twitter:description"]', meta.twitterDescription);
      setMeta('meta[name="twitter:image:alt"]', meta.imageAlt);

      if (languageLabel) {
        languageLabel.textContent = language === "es" ? "EN" : "ES";
      }

      if (languageToggle) {
        languageToggle.setAttribute(
          "aria-label",
          language === "es" ? "Cambiar a inglés" : "Switch to Spanish"
        );
      }

      renderTheme(root.classList.contains("dark"));
    }

    renderLanguage(currentLanguage);

    if (languageToggle) {
      languageToggle.addEventListener("click", () => {
        const nextLanguage = currentLanguage === "es" ? "en" : "es";
        renderLanguage(nextLanguage);
        savePreference("language", nextLanguage);
      });
    }

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const isDark = !root.classList.contains("dark");
        renderTheme(isDark);
        savePreference("theme", isDark ? "dark" : "light");
      });
    }
  });
})();
