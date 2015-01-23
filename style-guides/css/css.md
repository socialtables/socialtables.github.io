CSS
=======

Welcome to the Social Tables CSS Styleguide. Here is where you can learn more about our general philosophies and examples of how we write CSS, regardless of the preprocessor (LESS, SASS).


## Coding Style

### Spacing

* Put spaces after ```:``` in property declarations.
* Put spaces before ```{``` in rule declarations.
* Put line breaks between rulesets.
* When grouping selectors, keep individual selectors to a single line.
* Place closing braces of declaration blocks on a new line.
* Each declaration should appear on its own line for more accurate error reporting.

### Formatting

* Use rgb() or rgba() for color instead of hex codes, i.e: ```#000``` or specific colors, i.e: ```white``` or ```blue```
* Use ```/* */``` for comment blocks.
* Avoid specifying units for zero values, e.g., ```margin: 0```; instead of ```margin: 0px;```.
* Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values.

 * For example, if you want to apply a 5px right margin, write ```margin-right: 5px``` instead of ```margin: 0 5px 0 0```.
 * However, if you need to apply a 5px margin to both the right and left, use the shorthand and write ```margin: 0 5px``` vs separate properties for the right and left margins.



## Rules

Please refer to the following rules when writing style declarations.

### Use class selectors

Use only class selectors instead of ID, attribute, or tag selectors when writing declarations.

This allows us to maintain a consistent specificity-level amongst our rules.

```css

/* Bad */

#my-listing {
	color: rgb(50, 50, 50);	
}

li {
	color: rgb(50, 50, 50);
}


/* Good */

.my-listing {
	color: rgb(50, 50, 50);
}

```

### Use lower-case with dashes for naming classes, IDs

When naming your classes and IDs, use lower case with dashes to separate multiple words.

Even if an element is unique, apply its styles with a class instead of an ID. Let IDs only be referenced via JavaScript.

### Only use nesting for state-representations and psuedo classes

When using a preprocessor such as SASS or LESS, refrain from using nesting unless you are creating a certain set of styles for a given state (e.x: ```.selected```) or a pseudo class (e.x: ```:hover```).

There may be instances where we scope a set of styles by nesting them within an ID, but this will happen on a very limitied basis.

```css

/* Bad */

.employee-entry {
	background-color: rgb(50, 50, 50);

	.name {
		background-color: rgb(245, 245, 245);
	}

	.age {
		background-color: rgb(200, 200, 200);
	}

	span {
		color: rgb(245, 245, 245);

		a {
			color: rgb(245, 12, 100);
		}
	}
}


/* Good */

.employee-entry {
	background-color: rgb(50, 50, 50);
	&.selected {
		background-color: rgb(245, 245, 245);
	}
	&:hover {
		background-color: rgb(210, 210, 210);
	}
}

.employee-entry-name {
	background-color: rgb(245, 245, 245);
}

.employee-entry-age {
	background-color: rgb(200, 200, 200);
}

```

### Be specific

When naming your selectors in your declarations, try to be as specific as possible. This leads to cleaner 

### Property Order

When declaring properties within a declaration, order your properties like so:

* Position
	* ```position``` should be first
	* Order of other positional properties (```top```, ```right```, etc...) does not matter
* Display/Box Model
	* ```display``` should be first
	* Order of other display related properties does not matter
* Color
	* Order does not matter
* Font
	* Order does not matter
* Other styles
	* Order does not matter

```css

	.my-element {
		/* Positional Properties */
		position: absolute;
		top: 10px;
		right: 15px;
		bottom: 0;
		left: 0;
		/* Box Model properties */
		display: block;
		margin: 4px 10px 2px 9px;
		padding: 4px 10px 2px 9px;
		border: solid 1px;
		border-radius: 12px;
		/* Color properties */
		color: rgb(190, 210, 10);
		background-color: rgb(210, 210, 210);
		border-color: rgb(11, 23, 1);
		/* Font properties */
		font-size: 12px;
		font-weight: bold;
		/* Other style properties */
		text-align: center;
		box-shadow: 10px 10px 5px #888888;
	}

```

### Pixels vs. ems

Use ```px``` for ```font-size```, because it offers absolute control over text. Additionally, unit-less ```line-height``` is preferred because it does not inherit a percentage value of its parent element, but instead is based on a multiplier of the ```font-size```.

### Preprocessor Variable Naming

When naming variables in LESS/SASS, use an all lower-case, hyphen separated scheme.

```css
/* Good */
@my-variable-name: 10;

/* Bad */
@myVariableName: 10;
@MYVARIABLENAME: 10;
```


## File Structure/Scaffolding

Though file structure and scaffolding may vary on a project-by-project basis, the following is a structure that most projects will follow:

```
main.{less|scss}
├── components
│	├── index.{less|scss}
│   ├── comments.{less|scss}
│   └── main-list.{less|scss}
├── mixins
│	├── index.{less|scss}
│	├── buttons.{less|scss}
│	├── icons.{less|scss}
│	├── scrollbars.{less|scss}
│	└── fonts.{less|scss}
├── globals
│	├── index.{less|scss}
│   ├── z-index.{less|scss}
│   └── variables.{less|scss}
├── vendor
│	├── index.{less|scss}
│	├── fontello.css
│	├── grid.css
│  	├── jquery.fancybox-1.3.4.css
│	└── bootstrap-slider.css
└── skins
	├── default.{json|less|scss}
	└── demo.{json|less|scss}
```
### General Structure

The index.{less|scss} file contained within each directory is responsible for importing all of the other files within that directory.

The main style file will then import all of the index files from each directory. This allows all of the styles to be included in a single build.

### Components

Create a separate style file for each view component. For example, if you are building a ReactJS application, create a file for each React component and place them here.

### Mixins

When creating styles that will be shared across multiple components (for instance, two components that contain a similar button), create a file for them within the mixins directory and add the styles there.

### Skins

Skins are variables that create custom looks for the app. For example, you could have a skin for each customer or version of the app you create.

At a minimum, each project should have _default_ and _demo_ skin files.


## Resources

Here are some resources and/or references to resources for common functionality across applications. They can be downloaded and placed into your stylesheet file structure.

### CSS Reset

We use a custom CSS Reset file to set browsers to a consistent baseline before we begin styling them. 

**This should be the first set of styles loaded in your stylesheet.**

Click [here](http://www.cssreset.com/what-is-a-css-reset/) for more info about why we use CSS Resets.

For the Social Tables CSS Reset/Normalization, use the following file:

{Insert link to Social Tables CSS Reset File}

### Z-Index Management

For Z-Index management, we use the strategy outlined in [the following article](http://www.smashingmagazine.com/2014/06/12/sassy-z-index-management-for-complex-layouts/).

Since the *index()* method is not defined in LESS, we have a custom mixin that can be used to mimic the same functionality, using LESS lists instead of SASS arrays.

Link to LESS mixin: {Insert link to custom LESS z-index mixin}

### Icon Fonts

For creating/using icons in an application, we use Icon Fonts.

Click [here](http://www.vanseodesign.com/web-design/icon-fonts/) for more info about Icon Fonts.

For creating custom icon fonts, we use Fontello (http://fontello.com/)

### Grid Systems

Grid systems allow our applications to be fully responsive based on device screen size/resolution.

Click [here](http://en.wikipedia.org/wiki/Responsive_web_design) for more about grid systems and responsiveness.

Use the following grid system file: {insert link to ST Grid file}

## Further Reading

For further clarification on the concepts mentioned in the guide, please read the following articles:

* [Introduction to CSS and Web Design Layouts](http://learnlayout.com/)
* [What is the CSS Box Model?](https://www.addedbytes.com/articles/for-beginners/the-box-model-for-beginners/)
* [CSS *display* property](http://css-tricks.com/almanac/properties/d/display/)
* [CSS Positioning 101](http://alistapart.com/article/css-positioning-101)
* [CSS Specificity](http://www.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/)
* [CSS Psuedo Elements (::after, ::before)](http://css-tricks.com/almanac/selectors/a/after-and-before/)
