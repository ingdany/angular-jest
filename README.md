# AngularJest

Will not identify tests if your project is under a hidden folder like `.git/`, in this case you should create it in a folder like `git/`

## Create New Project
`ng new angular-jest`

## Development server
`ng serve -o``

## Remove Jasmine Dependencies
`npm remove @type/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter`

## Install Jest
`npm install --save-dev jest jest-preset-angular @types/jest`

## Create setup-jest.ts
Add import 'jest-preset-angular/setup-jest'

## Modify package.json
```
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ],
    "globalSetup": "jest-preset-angular/global-setup"
}
```

## Configure JEST in tsconfig.spec.json and tsconfig.spec.json
```
"types": [
    "jest"
  ]
```

## Set commands to execute in package.json

```
"test": "jest",
    "test:watch": "jest --watchAll"
```

## Remove karma.conf.js and test.ts

## Install Jest HTML Report
`npm install jest-html-reporter --save-dev`

Add to the `package.json` file

```
"reporters": [
      "default",
      ["./node_modules/jest-html-reporter", {
        "pageTitle": "Test Report"
      }]
    ]
```

## How to install WKHTMLTOPDF
```
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-2/wkhtmltox_0.12.6.1-2.jammy_amd64.deb
sudo apt install -f ./wkhtmltox_0.12.6.1-2.jammy_amd64.deb
```

## Command to Convert from HTML to PDF using WKHTMLTOPDF

`wkhtmltopdf test-report.html test-report.html`

## Generate XML to Export to Zephyr Squad

```
npm i -D jest-junit-reporter
```

Add the following line to `package.json`

```
{
  "jest": {
    "testResultsProcessor": "./node_modules/jest-junit-reporter"
  }
}
```