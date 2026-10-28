# Tamble website

Responsive static landing page based on the Paper Arcane design export. The page uses regular HTML, CSS, JavaScript, and extracted local media; it has no build step.

## Preview

Open `index.html` directly, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

## GitHub Pages

This repository is configured to publish the root directory with the workflow in `.github/workflows/pages.yml`. Create a GitHub repository, push this folder, then enable Pages with **GitHub Actions** as the build and deployment source. The public Pages URL can then be mapped to `tamble.paperarcane.com` by adding a `CNAME` file and DNS records.

The Steam store, social, and mailing list links are visual placeholders and should be replaced with the real destinations before launch.
