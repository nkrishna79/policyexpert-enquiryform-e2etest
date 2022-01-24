const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "97",
        },
        device: "Local Desktop",
        platform: {
            name: "MacOS",
            version: "MacOS Monterey",
        },
    },
});