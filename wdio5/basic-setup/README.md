WDIO V5 Samples
===============

Project to test Webdriver.IO / Webdriver use cases

## Install

```
npm install
```

## Run

### Local Selenium setup

```
./node_modules/.bin/wdio --hostname <SELENIUM_GRID_HOSTNAME> --baseUrl <TEST_URL> wdio.conf.js
```

* **`SELENIUM_GRID_HOSTNAME`**

  Hostname of your Selenium grid (port is expected to be `4444`)

* **`TEST_URL`**

  Root URL of the website used in the tests


### Browserstack

> Commercial grid (http://www.browserstack.com)

```
export BS_USER=<YOUR_BROWSERSTACK_USERNAME>
export BS_KEY=<YOUR_BROWSERSTACK_KEY>

./node_modules/.bin/wdio --baseUrl <TEST_URL> wdio.conf.browserstack.js
```

* **`YOUR_BROWSERSTACK_USERNAME`**

  Your Browserstack username

* **`YOUR_BROWSERSTACK_KEY`**

  Your Browserstack access key

* **`TEST_URL`**

  Root URL of the website used in the tests
