CSS
=======

Welcome to the Social Tables CSS Styleguide. Here is where you can learn more about our general philosophies and examples of how we write CSS, regardless of the preprocessor (LESS, SASS).


## Coding Style

### Spacing

* Put a single space after the ```:``` in property declarations.

```css

/* Bad */
.my-class {
	display:block;
}

/* Good */
.my-class {
	display: block;
}

```

* Put spaces before ```{``` in rule declarations.

```css

/* Bad */
.my-class{
	display: block;
}

/* Good */
.my-class {
	display: block;
}

```

* Put line breaks between rulesets.

```css

/* Bad */
.my-class {
	display: block; width: 500px; height: 100px;
}

.my-class-2 {
    display: inline-block; width: 500px; height: 100px;
}

/* Good */
.my-class {
	display: block;
	width: 500px;
	height: 100px;
}

.my-class-2 {
    display: inline-block;
	width: 500px;
	height: 100px;    
}

```

* When grouping selectors, keep individual selectors to a single line.

```css

/* Bad */
.my-class, .my-other-class {
	display: block;
}

/* Good */
.my-class,
.my-other-class {
	display: block;
}

```

* Place closing braces of declaration blocks on a new line.

```css

/* Bad */
.my-class{ display: block; }

.my-class{
	display: block; }

/* Good */
.my-class {
	display: block;
}

```

* Each declaration should appear on its own line for more accurate error reporting.


```css

/* Bad */
.my-class{ display: block; height: 400px; width: 500px; }

/* Good */
.my-class {
	display: block;
	height: 400px;
	width: 500px;
}

```

### Formatting

* Use ```rgb()``` or ```rgba()``` for color instead of hex codes (```#000```) or specific colors (```white``` or ```blue```)
* Use ```/* */``` for comment blocks.
* Avoid specifying units for zero values, e.g., use ```margin: 0```; instead of ```margin: 0px;```.
* Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values.
* For example, if you want to apply a 5px right margin, write ```margin-right: 5px``` instead of ```margin: 0 5px 0 0```.
* However, if you need to apply a 5px margin to both the right and left, use the shorthand and write ```margin: 0 5px``` vs separate properties for the right and left margins.


### Preprocessor Variable Naming

When naming variables in LESS/SASS, use an all lower-case, hyphen separated scheme.
__NOTE:__ LESS variables are prefixed with the _@_ symbol while SASS variables are prefixed with _$_

```css

/* Good */
@my-variable-name: 10; /* LESS */
$my-variable-name: 10; /* SASS */

/* Bad */
@myVariableName: 10; /* LESS */
@MYVARIABLENAME: 10; /* LESS */

$myVariableName: 10; /* SASS */
$MYVARIABLENAME: 10; /* SASS */

```

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
**Avoid using IDs.** These are far more dificult to maintain and override. These chould be used for Javascript.

```css

/* Bad */
.myListing {
	color: rgb(50, 50, 50);
}

.My-Listing {
	color: rgb(50, 50, 50);
}

.My-listing {
	color: rgb(50, 50, 50);
}

/* Good */
.my-listing {
	color: rgb(50, 50, 50);
}
```

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

### For Nesting, Maximum 3 Levels Deep

If you have more than 3 layers, your style is too reliant on HTML structure, overly specific, and not very reusable.
```css
/* Bad */
.employee-entry {
    .description{
        .first-name{
            .last-name{
                color: white;
            }
        }
    }
}

```


### Property Order

When declaring properties within a declaration, order your properties like so:
* Preprocessor Variables
	* Any scoped LESS/SASS/preprocessor variables should appear first
* Preprocessor Mixins
	* Any mixins should appear next
* Position Properties
	* ```position``` should be first
	* Order of other positional properties does not matter
	* Other positional properties include the following:
		* ```top```
		* ```bottom```
		* ```right```
		* ```left```
		* ```float```
		* ```clear```
* Display/Box Model Properties
	* ```display``` should be first
	* Order of other display related properties does not matter
	* Other Box Model properies include the following:
		* ```width```
		* ```max-width```
		* ```min-width```
		* ```height```
		* ```min-height```
		* ```max-height```
		* ```margin```
		* ```padding```
		* ```border```
			* ```border-color``` and ```border-radius``` should be placed with other styles
* Other Style Properties
	* Order does not matter
	* __However, try your best to group similar styles together__
	* Similar styles would be font properties as a group, all color related properties as a group, etc..

```css

	.my-element {
		/* Preprocessor Variables/Extends */
		@color: blue; /* LESS variable syntax */
		.my-mixin: /* LESS mixin syntax */
		$color: blue; /* SASS variable syntax */
		@include .my-mixin; /* SASS mixin syntax */
		@extend .message; /* SASS extend syntax */
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
		/* Other style properties */
		/* Color related properties */
		color: rgb(190, 210, 10);
		background-color: rgb(210, 210, 210);
		border-color: rgb(11, 23, 1);
		border-radius: 12px;
		/* Font-related properties */
		font-size: 12px;
		font-weight: bold;
		/* Non-grouped properties */
		text-align: center;
		box-shadow: 10px 10px 5px #888888;
	}

```

### Pixels vs. ems

Use ```px``` for ```font-size```, because it offers absolute control over text. Additionally, unit-less ```line-height``` is preferred because it does not inherit a percentage value of its parent element, but instead is based on a multiplier of the ```font-size```.


### Variable Placement

If you have a variable that will be referenced throughout all of your sheets, then you should place it within the _variables_ file in your globals directory (see the File Structure/Scaffolding section for more details).

However, if you only need to use a variable within a single style, only define it within that style itself.

```css

/* Scoping a variable within a style */
.my-listing {
	$selected-color: rgb(50, 50, 50);

	color: $selected-color;
	border-color: $selected-color;
}

```

### When to Create a Variable

Create a variable when you find that you are repeating a resuable constant, such as a color value, mutiple times.

For example, create a variable for a non-skinfile color such as black (represented with ```rgb(0,0,0)```) being used throughout your codebase.

__Before creating a new variable, check to see if an existing variable can be used to accomplish what you need__

For example, to manipulate an existing color variable, see the documentation for the _lighten()_ or _darken()_ method of your chosen preprocessor.


However, if you had a situation where a value is repeated, but the usages are un-related (for instance, two elements that both have a ```margin: 5px``` where the margin values may not always be the same), then do not create a variable. In this case, we would not create a variable for the ```5px``` value.


## File Structure/Scaffolding

Though file structure and scaffolding may vary on a project-by-project basis, the following is a structure that most projects will follow:

```
main.{less|scss}
├── views
│	├── index.{less|scss}
│	├── landing-page.{less|scss}
│	└── event-details-page.{less|scss}
├── components
│	├── index.{less|scss}
│	├── comments.{less|scss}
│	└── calendar.{less|scss}
├── mixins
│	├── index.{less|scss}
│	├── buttons.{less|scss}
│	├── icons.{less|scss}
│	├── scrollbars.{less|scss}
│	└── fonts.{less|scss}
├── globals
│	├── index.{less|scss}
│	├── variables.{less|scss}
│	└── z-index.{less|scss}
├── vendor
│	├── index.{less|scss}
│	├── fontello.css
│	├── grid.css
│	├── responsive-utils.css
│	├── jquery.fancybox-1.3.4.css
│	└── bootstrap-slider.css
└── skins
	├── default.{json|less|scss}
	└── demo.{json|less|scss}
```

### General Structure

The index.{less|scss} file contained within each directory is responsible for importing all of the other files within that directory.

The main style file will then import all of the index files from each directory. This allows all of the styles to be included in a single build.


### Views

Create a separate style file for each unique view in your application. For instance, if you have a unique page (such as a landing page) in your application, create a file for it here.

For each view file, wrap all of the content with a class tag so that any preprocessor variables defined are scoped to the file itself and as a sanity check to prevent style collisions.


```css
/***********************************

	EX: /views/landing-page.scss

***********************************/

/* Wrapping all of the file content with .landing-page class tag */
.landing-page {

	$left-margin: 5px; /* variable is scoped to .landing-page and cannot be referred to outside of it */

	.title { ... }
	.user-name { ... }
	.user-age { ... }

} /* End of styles */

```

### Components

Create a separate style file for each resuable view component. For example, if you have a React component, create a file for it here.

For each component file, wrap all of the content with a class tag so that any preprocessor variables defined are scoped to the file itself and as a sanity check to prevent style collisions.

```css
/***********************************

	EX: /components/calendar.scss

***********************************/

/* Wrapping all of the styles with .calendar class */
.calendar {
	$left-margin: 5px; /* variable is scoped to .calendar and cannot be referred to outside of it */

	.title { ... }
	.date-day { ... }
	.date-month { ... }

} /* End of styles */

```


### Mixins

When creating styles that will be shared across multiple views or components (for instance, two components that contain a similar button), create a file for them within the mixins directory and add the styles there.


### Skins

Skins are variables that create custom looks for the app. For example, you could have a skin for each customer or version of the app you create.

At a minimum, each project should have _default_ and _demo_ skin files.


## Resources

Here are some references to resources for common functionality across applications. They can be downloaded and placed into your file structure.


### CSS Reset

We use a custom CSS Reset file to set browsers to a consistent baseline before we begin styling them.

**This should be the first set of styles loaded in your stylesheet.**

Click [here](http://www.cssreset.com/what-is-a-css-reset/) for more info about why we use CSS Resets.

For the Social Tables CSS Reset/Normalization, use the following file:

https://github.com/socialtables/css-assets/blob/master/css/reset.css


### Z-Index Management

For Z-Index management, we use the strategy outlined in [the following article](http://www.smashingmagazine.com/2014/06/12/sassy-z-index-management-for-complex-layouts/).

Since the *index()* method is not defined in LESS, we have a custom mixin that can be used to mimic the same functionality, using LESS lists instead of SASS arrays.

Link to LESS mixin: https://github.com/socialtables/css-assets/blob/master/less/z-index-mixin.less

REMINDER: Elements that have position: static will NOT respect z-index, so make sure that the position attribute is set to a non-static value.

### Icon Fonts

For creating/using icons in an application, we use Icon Fonts.

Click [here](http://www.vanseodesign.com/web-design/icon-fonts/) for more info about Icon Fonts.

For creating custom icon fonts, we use Fontello (http://fontello.com/)


### Grid Systems

Grid systems allow our applications to be fully responsive based on device screen size/resolution.

Click [here](http://en.wikipedia.org/wiki/Responsive_web_design) for more about grid systems and responsiveness.

We use the default build of the Bootstrap V3 grid system. [Click here](http://getbootstrap.com/css/#grid) to read more.

Use the following grid system file in your projects: https://github.com/socialtables/css-assets/blob/master/css/grid.css


### Responsive Utilities

Responsive utilities allow us to conditionally hide/show elements based on the browser viewport width.

For instance, if you needed to hide an element on mobile but have it be seen on anything with a larger screen size,
you would write the following:

```html
<div class="my-mobile-only-element visible-xs-block">
	You should only see this on mobile screen sizes
</div>
```

We use the Bootstrap V3 responsive utilities. [Click here](http://getbootstrap.com/css/#responsive-utilities) to read more.

Use the following responsive utilities file in your projects: https://github.com/socialtables/css-assets/blob/master/css/responsive-utils.css

## Further Reading

For further clarification on the concepts mentioned in the guide, please read the following articles:

* [Introduction to CSS and Web Design Layouts](http://learnlayout.com/)
* [What is the CSS Box Model?](https://www.addedbytes.com/articles/for-beginners/the-box-model-for-beginners/)
* [CSS *display* property](http://css-tricks.com/almanac/properties/d/display/)
* [CSS Positioning 101](http://alistapart.com/article/css-positioning-101)
* [CSS Specificity](http://www.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/)
* [CSS Psuedo Elements (::after, ::before)](http://css-tricks.com/almanac/selectors/a/after-and-before/)
