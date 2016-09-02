## [v2.1.1] 02-09-2016
### Fixes
* Missing documentation for *cssFontsUrl* and *cssDest* CLI args. (Issue [#2](https://github.com/Exictos-DCS/dcs-icon-font/issues/2))

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
