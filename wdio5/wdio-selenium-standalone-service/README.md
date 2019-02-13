Test @wdio/selenium-standalone-service
======================================

1. Init project
   ```
   npm init
   ```

2. Install WebdriverIO

   ```
   npm i --save webdriverio
   ```

3. Configure WDIO project

   ```
   npm i --save @wdio/cli
   ./node_modules/.bin/wdio config
   ```

  
   Installation Log:
   ```
   =========================
   WDIO Configuration Helper
   =========================
   
   ? Where should your tests be launched  local - https://www.npmjs.com/package/@wdio/local-runner
   ? Shall I install the runner plugin for you? Yes
   ? Where is your automation backend located? On my local machine
   ? Which framework do you want to use? mocha
   ? Shall I install the framework adapter for you? Yes
   ? Do you want to run WebdriverIO commands synchronous or asynchronous? sync
   ? Where are your test specs located? ../specs/basic/*Test.js
   ? Which reporter do you want to use?  dot - https://www.npmjs.com/package/@wdio/dot-reporter,  spec - https://www.npmjs.com/package/@wdio/spec-reporter
   ? Shall I install the reporter library for you? Yes
   ? Do you want to add a service to your test setup?  selenium-standalone - https://www.npmjs.com/package/@wdio/selenium-standalone-service
   ? Shall I install the services for you? Yes
   ? Level of logging verbosity info
   ? What is the base url? http://localhost
   
   Installing wdio packages:
   - @wdio/local-runner
   - @wdio/mocha-framework
   - @wdio/dot-reporter
   - @wdio/spec-reporter
   - @wdio/selenium-standalone-service
   - @wdio/sync
   ```

4. Execute Tests

   Start test website, from `test-website` folder

   ```
   npm i
   npm run static-server
   ```

   Test website available @ http://localhost:3000
   
   ```
   ./node_modules/.bin/wdio --baseUrl http://localhost:3000 wdio.conf.js
   ```

   (`baseURL` is the URL to the website targeted by the tests)
