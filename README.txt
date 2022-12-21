- Install nodejs version 16.14.2 -x64.
- Install OpenJDKU-jdk_x64_windows_hotspot.
- Create system enviroment variable of JAVA_HOME and add it to the path.
- Install Android Studio.
- Create user enviroment variable ANDROID_HOME loking for the Sdk in AppData/Local.
- Create two devices in the emulator of Android Studio. 
- Install Appium Inspector.
- Run the command npm install appium@^2.0.0-beta.27
- Run the command npm i -g appium-doctor, of something necessary is not present go 
to SDK Manager and install all the Android SDK tools, even the hide for obsolete.
- Run the command appium driver install xcuitest
- Run the command appium driver install uiautomator2
- Run the command npm install @wdio/cli@v7
- Create a folder and run the command: npm init -y; inside the folder (generate package.json)
- Run the command npm i @wdio/cli
- Run the command npx wdio config
////////////////////////
? A project named "webdriverio-appium" was detected at "C:\Users\ric-1\source\repos\TestCalculator\webdriverio-appium",
correct? Yes
? Where should your tests be launched? local - for e2e testing of web and mobile applications
? Where is your automation backend located? On my local machine
? Which framework do you want to use? Mocha (https://mochajs.org/)
? Do you want to use a compiler? No!
? Do you want WebdriverIO to autogenerate some test files? No
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup?
? Do you want to add a service to your test setup? chromedriver, appium
? What is the base url? http://localhost
? Do you want me to run `npm install` No
///////////////////////////
- Delete node_modules folder
- Update package.json with
"dependencies": {
    "@wdio/cli": "^7.16.14",
    "appium": "^2.0.0-beta.46"
  },
  "devDependencies": {
    "@wdio/appium-service": "^7.16.14",
    "@wdio/local-runner": "^7.16.14",
    "@wdio/mocha-framework": "^7.16.14",
    "@wdio/spec-reporter": "^7.16.14"
  }
- Run the command npm install
- Update wdio.conf.js change
services: [['appium', {
        args: {
          address: 'localhost',
          port: 4723,
          relaxedSecurity: true,
        },
        logPath: './'
      }]],
- 

