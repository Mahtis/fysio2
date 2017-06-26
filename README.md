# fysio

[![Build Status](https://travis-ci.org/Mahtis/ProfilerApp.svg?branch=master)](https://travis-ci.org/Mahtis/ProfilerApp)

[Heroku](https://frozen-dawn-89255.herokuapp.com)

[Backlog](https://docs.google.com/spreadsheets/d/1jfjklsfU010FvHHj6rzSbhvvMsHWwTzUubCUJlhY1pw/) 

## Testing

For testing the Ruby backend we use rspec. `bundle exec rspec` runs all the tests under `spec`folder.

We use [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) for testing Java Script. Tests 
are under `app/javascript/components/__tests__` and they can be run with `yarn test`. `yarn test:coverage`
creates test coverage reports for Java Script components in `coverage/Icov-report/index.html`

All tests are run in Travis CI on each build.
