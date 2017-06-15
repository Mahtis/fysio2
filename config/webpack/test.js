// Note: You must restart bin/webpack-dev-server for changes to take effect

const merge = require('webpack-merge')
const sharedConfig = require('./shared.js')

module.exports = merge(sharedConfig, {})

// suite needs a least one test to pass, not sure how this should be set up in the end... -Tapio
it('', () => {})