# RL without Tears Project Site

Static living-introduction website for:

**Reinforcement Learning without Tears: An Introduction in the Era of Large Language Models**

## Files

- `index.html`: academic introduction landing page with chapters, materials, ecosystem, and citation
- `reader.html`: expanded web-native introduction with section summaries, formulas, references, and selected cropped figures
- `cheatsheet.html`: formula cheat sheet for core RL and preference-learning objectives
- `glossary.html`: concise glossary for RL, reward modeling, reasoning, and agent terms
- `styles.css`: responsive academic book-style visual design
- `assets/rl-without-tears.pdf`: paper PDF
- `assets/figures/`: cropped figure/table images extracted from the paper PDF for the online reader
- `.github/workflows/pages.yml`: GitHub Pages deployment workflow

## Deploy to GitHub Pages

1. Keep this folder at `website/` in the `RL-without-Tears` repository.
2. Push to the `main` branch.
3. In GitHub, enable Pages with source `GitHub Actions`.

The root workflow at `.github/workflows/pages.yml` will publish this folder automatically.

## Update Links

In `index.html`, update:

- the paper URL if the arXiv link is available
- the BibTeX entry after the final arXiv metadata is available

## Note on HTML Rendering

The full LaTeX source contains custom macros, TikZ figures, and complex mathematical tables. A direct `make4ht`
conversion was not stable enough for a clean GitHub Pages site, so this version uses a hand-curated HTML introduction
that preserves the paper's section structure, embeds selected cropped figures, and points readers to the PDF for
full details.
