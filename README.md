# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

---

## Project Structure

```
doc/
├── .vscode/                # VS Code settings (optional)
├── blog/                   # Blog posts (Markdown files and images)
│   └── 2021-08-26-welcome/
│       ├── index.md        # Example blog post
│       └── docusaurus-plushie-banner.jpeg
├── build/                  # Generated static site (after build)
├── docs/                   # Documentation pages (Markdown files)
├── src/                    # Custom React components, CSS, etc.
├── static/                 # Static assets (images, favicon, etc.)
├── .gitignore
├── README.md               # Project instructions
├── docusaurus.config.js    # Docusaurus site configuration
├── package.json            # npm dependencies and scripts
├── package-lock.json
└── sidebars.js             # Sidebar configuration for docs
```

---

## Key Points

- **All content (docs, blog posts, images)** should be added/edited in `docs/`, `blog/`, or `static/`.
- **Do not edit the `build/` or `gh-pages` branch manually.**  
  These are generated and managed by Docusaurus during deployment.
- **Configuration** is handled in `docusaurus.config.js` and `sidebars.js`.
- **Deployment** is done via `npm run deploy`, which builds the site and pushes the output to the `gh-pages` branch for GitHub Pages hosting.

---

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

Example SSH config for project-specific key:

```
Host github.com-kanujgit-doc
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_doc
```

---

## Blogging with Docusaurus

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Here are a few tips you might find useful.

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./blog/2021-08-26-welcome/docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your `docusaurus.config.js` file.
