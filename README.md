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
