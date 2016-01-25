# fronteer.io

This repository holds the static assets that power fronteer.io

## Notes

### How it works

All content is statically generated through Jekyll and hosted on GitHub Pages. This means that there's no external webserver required to host anything.

### Local development

Install the jekyll gem (`gem install jekyll`) and run `jekyll serve` from the root directory of this repository. This will fire up a local HTTP server and serve the website at http://localhost:4000. Every time you edit a page, jekyll will regenerate the appropriate files.

### Updating the live website

Commit the changes you'd like to make to the master branch, push them to the origin (fronteerio/fronteerio.github.io) repository and GitHub will automatically deploy a new version for you. Depending on the load on their servers, this can take up to a minute.

### Contact form

The contact form is powered through [formspree.io](http://formspree.io) and will send mails to info@fronteer.io.

