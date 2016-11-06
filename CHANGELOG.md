## [v2.2.1] 07-11-2016
### Adds
* New CLI args to pass args directly to [svgicons2svgfont].
* New CLI arg to enable the specification of a custom CSS, SCSS or HTML template.

## [v2.2.0] 03-09-2016
### Adds
* New CLI arg to specify the html path
* New CLI arg to enable the specification of a custom CSS, SCSS or HTML template.

### Changes
* HTML preview file name. Now, instead of "preview", it is named as "[fontname]-preview.html"

### Fixes
* Missing flags in the *--help* section (--cssFontsUrl, --cssDest and --sass)

## [v2.1.1] 02-09-2016
### Fixes
* Missing documentation for *cssFontsUrl* and *cssDest* CLI args. (Issue Exictos-DCS/dcs-icon-font#2)

## [v2.1.0] 09-08-2016
### Adds
* Search engine for quick access to a specific icon in the HTML previewer

### Fixes
* Hardcoded content into the HTML previewer. Which wouldn't work properly for fonts with a different name from 'dcs-icon'
* Harcoded icon ```dcs-icon-delete``` in the "utility classes" section. Using the first icon of the icons set instead

## [v2.0.0] 22-07-2016
### Adds
* Bootstrap template for icons preview
* Sass generator
* Utility classes for icons sizing

## [v1.0.0] 09-05-2016
### Adds
* Generation of webfont for a set of SVG icons
* Generation of CSS stylesheet for an easy usage
* CLI arguments to customize the **font** and the **CSS**
```javascript
--out
--icons
--baseclass
--classprefix
--fontname
--html
```

[v1.0.0]: https://github.com/Exictos-DCS/dcs-icon-font/releases/tag/v1.0.0
[v2.0.0]: https://github.com/Exictos-DCS/dcs-icon-font/releases/tag/v2.0.0
[v2.1.0]: https://github.com/Exictos-DCS/dcs-icon-font/releases/tag/v2.1.0
[v2.1.1]: https://github.com/Exictos-DCS/dcs-icon-font/releases/tag/v2.1.1
[v2.2.0]: https://github.com/Exictos-DCS/dcs-icon-font/releases/tag/v2.2.0
[svgicons2svgfont]: https://github.com/nfroidure/svgicons2svgfont
