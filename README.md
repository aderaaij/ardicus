# Ardicus: Barebone middleman template based on Amicus

## What is it?

Ardicus is my interpretation of the [Amicus](https://github.com/nathos/amicus) Middleman template. It is designed as a barebone starting point for creating static sites / prototypes with the [Middleman app](http://middlemanapp.com/) static site generator. It features [HTML5 Boilerplate](http://html5boilerplate.com/), [Haml](http://haml-lang.com/), [Sass](http://sass-lang.com/), [Compass](http://compass-style.org/), [Susy](http://susy.oddbird.net/) grid system, and lots of best practices.

## How do I use it?

Start by installing [Bundler](http://gembundler.com/), if you don't already have it:

```
gem install bundler
```

Then just download the [latest source](https://github.com/aderaaij/ardicus) or if you prefer, clone the bootstrap repository down to your local machine:

```
git clone https://github.com/aderaaij/ardicus.git my_new_project
```

Finally, do a ```bundle install``` to install the required gems -- even Middleman itself!

Use ```middleman``` to do your live development and ```middleman build``` to render your static file output to the ```/build/``` directory.

For full Middleman documentation, visit the [Middleman website](http://middlemanapp.com/).


## Middleman Template

Middleman now supports project templates. To use Middleman Bootstrap as a template, clone the Git repository into ```~/.middleman```, like so:

```git clone https://github.com/aderaaij/ardicus.git ~/.middleman/ardicus```

then use the new template argument for the ```middleman init``` command:

```middleman init my_new_project --template=ardicus```


## License

Based on [Amicus](https://github.com/nathos/amicus) by [Nathos](https://github.com/nathos)

Following the lead of [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) here...

Major components:

* HTML5 Boilerplate: MIT license
* Normalize.css: MIT license
* Modernizr: MIT/BSD license
* jQuery: MIT/GPL license
* Susy: MIT license

Everything else:

* MIT license -- see LICENSE.md