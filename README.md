# Hello Scrollytelling!

This is a bare bones version of the scrollytelling structure underlying the [Stitch Fix Algorithms Tour](http://algorithms-tour.stitchfix.com), the full source code for which is [here](https://github.com/stitchfix/algorithms-tour). It is based on Jim Vallandingham's concepts and code for scrollytelling with D3, which is explained [here](http://vallandingham.me/scroller.html), demonstrated [here](http://vallandingham.me/scroll_demo/) and coded [here](https://github.com/vlandham/scroll_demo).

In our Algorithms Tour, we used a lot of svg drawings and [d3.timer](https://github.com/d3/d3-timer)-based animations, both of which are demonstrated here. Also included here is some math in svg, using a combination of Computer Modern fonts (the same fonts used as the Latex defaults) and outlined-path symbols where necessary - a minor hassle, as you can see, but not terrible.

## Code

The description in this section is very similar to the one in the [Algorithms Tour readme](https://github.com/stitchfix/algorithms-tour/blob/master/README.md), but since this repo is a bare-bones version of the structure, it is somewhat simpler here. Apologies for being repetitive.

The figure below illustrates the overall structure. The two most important `<div>` elements are the `#sections` and `#vis` elements, which play the roles described in Jim Vallandingham's description: the `#sections` div contains a set of `<section class="step">` elements that form the text column on the left, and whose positions determine which javascript functions are called when to manipulate the visual elements in the `#vis` div. These two `<div>`s are wrapped in a `#graphic <div>`, in keeping with Vallandingham's structure.


![structure-illustration-1](/doc/readme-illustration-1.png?raw=true)

If you take a quick gander at the `index.html` file, you will see a lot of svg syntax. The drawing elements within the `<svg>` constitute the landscape, sun, math and text. These svg elements were drawn in Adobe Illustrator (though any such graphical program could be used so long as it supports svg saving or export) and then simply pasted into the `index.html` file: this certainly bloats the file and is ugly to see in an html file, but it does make for a handy iterative workflow. 

The first hierarchical level within the `<svg>` is composed entirely of `<g>` elements, each with an id that corresponds to the layer name in Illustrator and which gets referenced by the javascript functions that control the animation (e.g. by turning their `display` property on or off for different parts of the animation).


![structure-illustration-1](/doc/readme-illustration-2.png?raw=true)

For each `<section class="step">` element in `#sections` (contained in `index.html`), there are two corresponding functions in `conductor.js`: an "activate" function, which is called when that section is scrolled into prominence (i.e. when the section above it reaches the top of the window); and a "progress" function, which is called for any scroll action within that section, and which uses the relative position within the section as a function parameter named `progress`. 

## Enjoy!
