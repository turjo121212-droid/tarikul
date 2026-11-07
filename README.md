# Anand Jain, PhD | Portfolio

Personal academic portfolio built with plain HTML, CSS and JavaScript. No build step, hosted free on GitHub Pages.

## Publish on GitHub Pages

1. Create a repository named `<your-username>.github.io` (this gives you `https://<your-username>.github.io`), or any name such as `portfolio`.
2. Upload everything in this folder to the repository root (keep `index.html` at the top level).
3. Go to **Settings > Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then **Save**.
4. Wait about a minute. Your site will be live at the address shown on that page.

## Customise

- **Photo:** replace `assets/photo.jpg` with a larger portrait (about 800×1000 px) if you want a sharper image.
- **CV:** replace `assets/Anand_Jain_CV.pdf` with your latest version, keeping the file name.
- **Content:** edit text directly in `index.html`. Add a publication by copying one `<li data-t="...">` line (`eco`, `bes`, `fou` set the filter category).
- **Colours and fonts:** change the variables at the top of `style.css`.
- **Links:** consider adding Google Scholar, ORCID and ResearchGate links in the Contact section.

## Files

| File | Purpose |
|---|---|
| `index.html` | All page content |
| `style.css` | Design, dark mode, responsive layout |
| `script.js` | Publication filter and footer year |
| `assets/` | Photo and CV PDF |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |
