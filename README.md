<p align="center">
  <a href="http://www.exictos.com/">
    <img src="/uploads/dbedbb2131dc8eb09b2a5bf6027e0ae9/symbol-exictos.png" width="100" alt="Exictos"/>
  </a>
</p>
<h1 align="center">
  Exictos - Distribution Channel Solutions
</h1>
## dcs-incon-font
Is a font generator that enables you to generate fonts for SVG icons.

So you'll be able to use vectorial icons as a text font and manipulate them very easily.

It aims to make all the icons management easier and provide all the SVG features in a really flexible way.
So you can write nice and clean CSS and HTML without polluting your code with SVG codes or *src* paths.

## Installation

You can install it through NPM, simply run:

```
npm install dcs-icon-font -g
```

Or you can clone it and install all its dependencies:
```
git clone git@172.25.1.187:canais-n-presenciais/dcs-icon-font.git
npm install -g
```

## Usage

When installing from NPM globally, you can simply run:

```
dcs-icon-font --icons my-svg-icons
```

(see the "src/config/wf-config.js") for more customization.

## Code Example

```
<i class="dcs-icon dcs-icon-aeroplane4" style="color: #B33B3B; background-color: #F7FFE5; font-size: 30px;"/>
```
Will produce the following in your web browser:

![dcs-icon-aeroplane4](/uploads/ff4a74f99614bdbc7042a52df25315eb/dcs-icon-aeroplane4.PNG)

## API Reference

These are all the flags that you can use with the *dcs-icon-font* generator:

| Flag                    | Description
| ----------------------- |:-------------
| --help                  | Presents all the available arguments that the dcs-icon-font cli is ready to handle
| --out [string]          | Specifies where the generated code is stored into. Default *"./build"*
| --icons [string]        | Specifies the directory that contains the SVG icons from which you want to generate the font. Default *"./icons"*
| --baseclass [string]    | Specifies the base css class name. Default *"dcs-icon"*
| --classprefix [string]  | Specifies the css class prefix for all your icons. Default *"dcs-icon-"*
| --fontname [string]     | The name for your brand new font. Default *"dcsIconFont"*
| --html                  | Because it would be nice to have a preview of all the generated fonts and CSS, you can pass this flag and have a html file with a html preview


## Tests

If you wish to run some tests accross this generator, you can do it by typing:

``` 
npm run test
``` 
