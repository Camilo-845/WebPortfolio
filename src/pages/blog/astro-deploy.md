---
layout: ../../layouts/BlogLayout.astro
title: From Astro basic page to deployming with self domain
description: HTML is the foundation of all websites. This guide will walk you through creating your first simple website using HTML.
tags: ["code", "astro"]
time: 2
featured: true
timestamp: 2024-12-18T02:39:03+00:00
filename: astro-deploy
---

Astro is a modern static site generator that allows you to build websites using components and frameworks like React, Vue, and Svelte. It provides a seamless developer experience by combining the best of static site generation and server-side rendering.

To deploy an Astro website with GitHub Pages, you can follow these steps:

1. Create a new repository on GitHub and name it according to your project.
2. Clone the repository to your local machine using Git.
3. Install Astro globally by running `npm install -g astro`.
4. Initialize a new Astro project by running `astro create .` in the root directory of your project.
5. Customize your Astro project by editing the `.astro` files and adding components.
6. Build your Astro project by running `astro build` in the terminal.
7. Commit and push the changes to your GitHub repository.
8. Go to the repository settings on GitHub and scroll down to the GitHub Pages section.
9. Select the branch you want to deploy (e.g., `main` or `master`) and choose the root folder as the source.
10. Click on "Save" to enable GitHub Pages for your repository.
11. Your Astro website will now be deployed and accessible at `https://<your-username>.github.io/<repository-name>`.

By following these steps, you can easily deploy your Astro website using GitHub Pages. Enjoy building and sharing your static sites with Astro!
### Adding a Custom Domain

If you want to use a custom domain for your Astro website deployed with GitHub Pages, you can follow these additional steps:

1. Purchase a domain from a domain registrar of your choice.
2. Go to the repository settings on GitHub and scroll down to the GitHub Pages section.
3. In the "Custom domain" field, enter your purchased domain (e.g., `www.yourdomain.com`).
4. Save the changes and go to your domain registrar's website.
5. Set up a CNAME record that points your domain to `<your-username>.github.io`.
6. Wait for the DNS changes to propagate, which may take some time.
7. Once the changes have propagated, your Astro website will be accessible at your custom domain.

By following these steps, you can configure a custom domain for your Astro website deployed with GitHub Pages. Enjoy the benefits of having your website accessible through your own domain!