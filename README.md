## Synopsis

**dcs-incon-font**
Is a font generator that enables you to generate fonts for SVG icons.

So you be able to use vectorial icons as a text font and manipulate them very easily.

## Installation

You can install it through NPM, simply run:

```
npm install dcs-icon-font -g
```

Or you can clone it and install all its dependencies:
```
git clone git@172.25.1.187:canais-n-presenciais/dcs-icon-font.git
npm install
```

## Usage

When installing from NPM globally, you can simply run:

```
dcs-icon-font --icons './my-svg-icons'
```

When cloning/downloading it, you can run:
```
npm run start
```

(see the "src/config/wf-config.js") for more customization

## Code Example

```
<i class="dcs-icon dcs-icon-aeroplane4" style="color: #B33B3B; background-color: #F7FFE5; font-size: 30px;"/>
```
Will produce the following:

![dcs-icon-aeroplane4](/uploads/ff4a74f99614bdbc7042a52df25315eb/dcs-icon-aeroplane4.PNG)

## Motivation

This project aims to make all the icons management easier and provide all the SVG features in a really flexible way.

With this, you can write nice and clean CSS and HTML without polluting your code with SVG codes or src *paths*


## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)
