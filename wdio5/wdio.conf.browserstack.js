let config = require("./wdio.conf.js").config;
let pkg = require("./package");


// Browserstack Settings
config.services = [ "browserstack" ];
config.user = process.env.BS_USER;
config.key = process.env.BS_KEY;
config.browserstackLocal = true;


// Browsers Capabilities
config.capabilities = [
    {
        // Browserstack Test Session
        "build": process.env.BROWSERSTACK_BUILD || `${pkg.name} ${pkg.version} Edge 16`,
        "project": process.env.BROWSERSTACK_PROJECT || `${pkg.name} ${pkg.version} Edge 16`,

        "os": "Windows",
        "os_version": "10",
        "browser": "Edge",
        "browser_version": "16",
        "browserName": "MicrosoftEdge",
    },
    {
        // Browserstack Test Session
        "build": process.env.BROWSERSTACK_BUILD || `${pkg.name} ${pkg.version} Edge 17`,
        "project": process.env.BROWSERSTACK_PROJECT || `${pkg.name} ${pkg.version} Edge 17`,

        "os": "Windows",
        "os_version": "10",
        "browser": "Edge",
        "browser_version": "17",
        "browserName": "MicrosoftEdge",
    },
    {
        // Browserstack Test Session
        "build": process.env.BROWSERSTACK_BUILD || `${pkg.name} ${pkg.version} Edge 18`,
        "project": process.env.BROWSERSTACK_PROJECT || `${pkg.name} ${pkg.version} Edge 18`,

        // Force Edge 18 on Windows 10
        "os": "Windows",
        "os_version": "10",
        "browser": "Edge",
        "browser_version": "18",
        "browserName": "MicrosoftEdge",
    }
];


exports.config = config;
