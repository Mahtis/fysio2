# fysio

[![Build Status](https://travis-ci.org/Mahtis/ProfilerApp.svg?branch=master)](https://travis-ci.org/Mahtis/ProfilerApp)

[Heroku](https://frozen-dawn-89255.herokuapp.com)

[Backlog](https://docs.google.com/spreadsheets/d/1jfjklsfU010FvHHj6rzSbhvvMsHWwTzUubCUJlhY1pw/) 

## Setting up the development environment

Physiological computing repository consists of React (15.5.4) frontend and Rails (5.1.1, Ruby 2.3.1) backend. Below you'll
find directions for building  and running the application locally on Linux and Mac.
 
### Linux

TBA

### Mac

#### Ruby on Rails

Install [rbenv](https://github.com/rbenv/rbenv) with `brew install rbenv` and ruby-build plugin
`brew install ruby-build`. (If you don't have [Homebrew](https://brew.sh/) installed, you can
install it with `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`.)
Add these lines into you `~/.bash_profile`:

    export PATH="$HOME/.rbenv/bin:$PATH"  
    eval "$(rbenv init -)"

Install Ruby with `rbenv install 2.3.1` and set your computer to use the version of Ruby with `rbenv global 2.3.1`.

Install Rails by running the following commands:

    echo 'gem: --no-ri --no-rdoc' >> ~/.gemrc
    gem install bundler
    gem install rspec
    gem install rake 
    rbenv rehash
    gem install rails -v 4.2.7
    rbenv rehash
    
Install needed Gems with `bundle install`.

#### Generating documentation

Install jsdoc

    npm install -g jsdoc
    
Run jsdoc from project root directory

    jsdoc -r app/javascript -d docs
    
Documentation can be found under docs directory

#### Running the app

We use [Yarn](https://yarnpkg.com/en/) for managing JS dependencies so you need to
install it first with `brew install yarn`.

Clone the repo with `git clone https://github.com/Mahtis/fysio2.git`. In the repository root run
 `bundle install` to install the needed Gems and `yarn install` for the needed JS dependencies.

Run database migrations with `rake db:migrate RAILS_ENV=development` and import test data with
`rake db:seed`.

Start Rails server with `rails s` in and inanother console window Webpack with `./bin/webpack-dev-server --host 127.0.0.1`
also in the project root.

And voilà! Your local repo is running in `http://localhost:3000/`.

#### Testing

For testing the Rails backend we use rspec. `bundle exec rspec` runs all the tests under `spec` folder.

We use [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) for testing Java Script. Tests 
are under `app/javascript/components/__tests__` and they can be run with `yarn test`. `yarn test:coverage`
creates test coverage reports for Java Script components in `coverage/Icov-report/index.html`


All tests are run in Travis CI.
