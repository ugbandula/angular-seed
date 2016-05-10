# angular-seed — the seed for AngularJS apps

This is a seed for an AngularJS application with multiple modules and moderate complexity.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.


## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Clone angular-seed

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/ugbandula/angular-seed.git
cd angular-seed
```

If you just want to start a new project without the angular-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/ugbandula/angular-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*


## Run the app

```npm start```

## Directory Layout

```
app/                    --> all of the source files for the application
  styles
    styles.css          --> default stylesheet
  features/             --> all app specific modules
    config/                --> application configurations
      sample.config.js           --> configuration details
    feature1/              --> sample feature
      sample.feature1.mod.js     --> module declaration
      sample.feature1.svc.js     --> service / factory implementations
      sample.feature1.dir.js     --> custom directive implementations
      sample.feature1.ctrl.js    --> controller implementations
      sample.feature1.tpl.js     --> associated html template file
  views/                --> the main view templates and logic
    home.html               --> the home view template
    404.js                  --> the 404 error template
  scripts/              --> the view2 view template and logic
    controllers/            --> main app controllers
        sample.main.controllers.js  --> the main controller
    directives/             --> the main app directives
    filters/                --> the main app filters
    service/                --> the main app services
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  karma.conf.js         --> config file for running unit tests with Karma
  e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  package.json          --> npm project file
```

