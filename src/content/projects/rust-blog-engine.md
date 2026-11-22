---
title: "Rust Blog Engine"
year: 2026
role: "Personal project"
shortDescription: "A small personal blog engine written in Rust - Markdown posts rendered to HTML with templated pages, built to learn Rocket and Rust's web ecosystem."
highlights:
  - "Rocket web framework for routing and request handling"
  - "Markdown posts rendered with pulldown-cmark"
  - "Tera and Handlebars templating via rocket_dyn_templates"
  - "Posts discovered from the filesystem with walkdir"
tags: ["Rust", "Rocket", "Markdown", "Tera", "Handlebars"]
featured: false
---

A small blog engine I wrote in Rust, mostly as a way to learn the language's web ecosystem beyond CLI tooling. It reads Markdown posts off the filesystem, renders them to HTML with pulldown-cmark, and serves templated pages through Rocket.

Templates use both Tera and Handlebars via rocket_dyn_templates, and serde handles post metadata. It's deliberately simple - no database, no admin panel - because the point was understanding the request lifecycle, templating, and Rust's ownership model in a real application rather than building another CMS.
