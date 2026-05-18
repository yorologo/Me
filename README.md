# Personal CV Portfolio

Static personal CV/portfolio website for **Josué Esaud Gómez González**.

This project is a simple, maintainable, single-page professional profile focused on backend development, infrastructure, cloud-oriented work, technical support, education, skills, certifications, and contact links.

## Features

- Responsive single-page CV/portfolio layout.
- Professional hero section with profile photo, title, location, and contact actions.
- Experience section ordered from most recent to oldest.
- Skills grouped by languages and technologies.
- Education, languages, and certifications sections.
- Light/dark mode toggle with preference stored in `localStorage`.
- Dynamic age calculation based on the birth date.
- Dynamic footer year.
- Basic SEO metadata.
- Open Graph and Twitter Card metadata for social previews.
- Accessibility improvements such as semantic landmarks, descriptive alt text, accessible labels, focus styles, and a skip link.

## Technologies Used

- HTML5
- Tailwind CSS via CDN
- Bootstrap Icons via CDN
- Vanilla JavaScript

No frontend framework, package manager, bundler, backend, or build system is required.

## Project Structure

```text
.
|-- assets/
|   `-- profile.jpeg
|-- index.html
`-- README.md
```

### `assets/profile.jpeg`

Local profile photo used by the page and social preview metadata.

### `index.html`

Contains the full website:

- HTML structure
- Tailwind utility classes
- SEO and social preview metadata
- Inline styles for small custom visual/accessibility refinements
- Inline JavaScript for age calculation, current year, and dark mode

### `README.md`

Project documentation.

## Open Locally

Because this is a static HTML project, you can open it directly in a browser.

1. Clone or download the project.
2. Open `index.html` with any modern browser.

No installation step is required.

You can also serve the folder with any static server if you prefer, but it is not necessary.

## Deployment with GitHub Pages

This project is ready to be published directly from the `main` branch because `index.html` is located at the repository root and no build step is required.

1. Push the project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings**.
4. Open **Pages** from the left sidebar.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch.
7. Select the root folder `/`.
8. Save the configuration.

GitHub Pages will publish the static site and provide the final public URL. After publishing, update the canonical and `og:url` metadata comments in `index.html` with that real URL.

## Other Deployment Options

This project can also be deployed on any static hosting provider.

### Netlify

1. Create a new site in Netlify.
2. Connect the Git repository or drag and drop the project folder.
3. Use the project root as the publish directory.
4. Leave build command empty.
5. Deploy.

No build command is needed because the site is static.

### Vercel

1. Import the repository into Vercel.
2. Keep the project as a static site.
3. Leave build command empty.
4. Use the project root as the output/publish directory.
5. Deploy.

No framework preset or build step is required.

## No Runtime Requirements

This project does **not** require:

- npm
- Node.js
- a backend server
- a database
- local dependencies
- a build pipeline

The external resources used by the page are loaded from CDNs:

- Tailwind CSS
- Bootstrap Icons

## Maintenance

Recommended maintenance tasks:

- Keep professional experience, skills, certifications, and education up to date.
- Confirm that external links still work:
  - email
  - phone
  - WhatsApp
  - GitHub
  - LinkedIn
  - PDF/CV link
- Update the canonical URL and Open Graph URL after deploying to a stable domain.
- Add a local favicon when one is available.
- Review SEO description and social preview metadata when the professional focus changes.
- Test the page in both light and dark mode after visual changes.
- Check the layout on mobile and desktop after content updates.
- Keep accessibility labels meaningful when adding or changing links and buttons.

## License

No license has been defined yet.

If this project will be shared publicly, consider adding a license file such as `MIT`, `Apache-2.0`, or a custom all-rights-reserved notice depending on how the content and code should be reused.
