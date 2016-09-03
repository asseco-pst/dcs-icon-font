<p align="center">
  <a href="http://www.exictos.com/">
    <img src="http://i.imgur.com/MogAiUZ.png" width="100" alt="Exictos"/>
  </a>
</p>

# Exictos - Distribution Channel Solutions

## dcs-icon-font

A generator that enables you to generate fonts from a set of SVG icons.

So you'll be able to use vectorial icons as a text font and manipulate them very easily.

It aims to make all the icons management easier and provide all the SVG features in a really flexible way.
So you can write nice and clean CSS and HTML without polluting your code with SVG codes or *src* paths.

## Installation

You can install it through NPM, simply run:

```
npm install dcs-icon-font
```

Or you can clone it and install all its dependencies:
```
git clone https://github.com/Exictos-DCS/dcs-icon-font.git
cd dcs-icon-font
npm install
npm run build
```

## Usage

When installing from NPM globally, you can simply run:

```
dcs-icon-font --icons my-svg-icons/*.svg
```

See the "Options List" for more options.

## Code Example

```
<i class="dcs-icon dcs-icon-aeroplane4" style="color: #B33B3B; background-color: #F7FFE5; font-size: 30px;"/>
```
Will produce the following in your web browser:

![dcs-icon-aeroplane4](http://i.imgur.com/GGuG9OP.png)

## Options List

These are all the flags that you can use with the *dcs-icon-font* generator:

| Flag                    | Description
| ----------------------- |-------------
| --help                  | Presents all the available arguments that the dcs-icon-font cli is ready to handle
| --out [string]          | Specifies where the generated code is stored into. Default *"./build"*
| --icons [string]        | Specifies the directory that contains the SVG icons from which you want to generate the font. Default *"./icons/&#42;.svg"*
| --fontname [string]     | The name for your brand new font. Default *"dcsIconFont"*
| --baseclass [string]    | Specifies the base CSS class name. Default *"dcs-icon"*
| --cssFontsUrl [string]  | Specifies the *font URL* to be defined into the resulting *CSS* file. Default: the *--fontname* specified
| --cssDest [string]      | Specifies destination path for the resulting *CSS* file. Default: The *--out* specified
| --classprefix [string]  | Specifies the CSS class prefix for all your icons. Default *"dcs-icon-"*
| --html                  | Because it would be nice to have a preview of all the generated fonts and CSS, you can pass this flag and have a html file with a html preview
| --sass                  | You're a cool developer and you use Sass instead of CSS? Not a problem, just provide this flag and get a brand new **.scss** file

## Tests

If you wish to run some tests accross this generator, you can do it by typing:

```
npm run test
```

## HTML preview sample
![Imgur](http://i.imgur.com/paG4Zgg.png)
![Imgur](http://i.imgur.com/xLkwZa7.png)
