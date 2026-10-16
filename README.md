# Personal CV Portfolio

Static professional CV/portfolio for **Josué Esaud Gómez González**, published at **https://yorologo.com/** with GitHub Pages.

## Architecture

The project intentionally stays small and static:

- HTML5
- Tailwind CSS 3.4.17 compiled to a committed local stylesheet
- Bootstrap Icons 1.11.3 vendored locally
- Vanilla JavaScript for English/Spanish content, theme behavior, and the footer year
- GitHub Pages publishing the repository root from `main` without Jekyll processing
- `CNAME` mapping the Pages site to `yorologo.com`

There is no backend, database, frontend framework, runtime package installation, or deployment build step.

## Repository structure

```text
.
|-- .github/
|   `-- workflows/
|       `-- validate.yml
|-- assets/
|   |-- css/
|   |   |-- tailwind-input.css
|   |   `-- site.css
|   |-- js/
|   |   `-- site.js
|   |-- vendor/
|   |   `-- bootstrap-icons/
|   |       |-- fonts/
|   |       |-- bootstrap-icons.min.css
|   |       `-- LICENSE
|   `-- profile.jpeg
|-- tests/
|   `-- site.test.mjs
|-- .nojekyll
|-- CNAME
|-- index.html
|-- README.md
`-- tailwind.config.js
```

## Local use

Clone the repository and open `index.html` in a modern browser. The committed site is self-contained and does not require npm, Node.js, a local server, or network access for its UI assets.

## CV for recruiters

The page is the single source of truth for the CV. Use **Print / Save CV**
(**Imprimir / Guardar CV** in Spanish) to open the browser's native print dialog.
Choose *Save as PDF* to create a document locally; the site does not upload or
store that PDF. The print stylesheet hides navigation and actions, includes a
plain-text contact email, and keeps projects, experience, skills and professional
credentials.

The printable portfolio may take several A4 pages. It is not a separately
curated one-page application CV. No Google Drive folder or private SEP
constancia PDFs are required for this flow. Visitors can check professional
registration numbers independently on the SEP's official website.

## Maintenance

Edit the English fallback content in `index.html` and keep the stable `data-i18n`, `data-i18n-aria`, and `data-i18n-alt` keys synchronized with both language values in `assets/js/site.js`. Edit custom styling in `assets/css/tailwind-input.css`; never change the generated `site.css` by hand.

When HTML classes or custom CSS change, regenerate the committed stylesheet from the repository root:

```powershell
npx --yes tailwindcss@3.4.17 -c tailwind.config.js -i ./assets/css/tailwind-input.css -o ./assets/css/site.css --minify
```

Validate the HTML with the same upstream checker used by CI:

```powershell
npx --yes --package=vnu-jar@26.8.30 vnu --errors-only index.html
```

Run the built-in behavior tests and check the Git diff:

```powershell
node --test tests/site.test.mjs
git diff --check
git status --short
```

Do not edit `assets/css/site.css` by hand; it is generated from `tailwind-input.css` and the Tailwind classes present in `index.html`.

## Git workflow

- `develop` is the integration branch.
- `main` is the stable branch published by GitHub Pages.
- Work and validate on `develop` first.
- Promote only validated changes to `main`.
- Do not discard an unexpected dirty worktree. Inspect it before continuing.
- Avoid concurrent writers on the same worktree. If parallel work is genuinely needed, use a separate Git worktree.

The remote uses the existing SSH authentication on the MSI target; no project-specific token is required.

## Validation workflow

`.github/workflows/validate.yml` runs on pushes to `develop` and pull requests targeting `main`. It:

1. validates `index.html` with the Nu Html Checker;
2. runs the Node.js navigation, localization, theme, and link tests;
3. rebuilds Tailwind CSS with the pinned 3.4.17 CLI;
4. fails if the committed generated CSS does not match the source.


The workflow has read-only repository contents permission and does not deploy the site.

## Deployment

GitHub Pages publishes the repository root from `main`. The empty `.nojekyll` file disables unnecessary Jekyll processing, and `CNAME` declares `yorologo.com` as the custom domain. No additional build pipeline is required for deployment.

After publishing a change, verify the real public site over HTTPS rather than treating a successful push as deployment evidence.

## Runtime security and privacy

- Active CSS, JavaScript, icons, fonts, and the profile image are served locally from the Pages site.
- English and Spanish share one static page; the selected language is stored locally in the browser.
- A Content Security Policy limits runtime resources to the same origin.
- External links opened in a new tab use `noopener noreferrer`.
- The page does not embed the full date of birth merely to calculate age.

## License

No project license has been defined. Add one only if there is a deliberate decision about reuse of the code and personal content.
