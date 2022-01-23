// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './enquiryformhelper'
// Alternatively you can use CommonJS syntax:
// require('./commands')
// index.js

module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push('--start-fullscreen')

            return launchOptions
        }

        if (browser.name === 'electron') {
            launchOptions.preferences.fullscreen = true

            return launchOptions
        }
    })
}