# How to run

## Run in emulator mode

1. Please make sure example native app: https://github.com/takalabid/fe-native-app-example installed at your emulator and successfuly running at your emulator
2. Change directory to `fe-native-app-boilerplate-tests` project directory
3. Open `wdio.emulator.conf.js`
4. Change value of `appium:deviceName` at line: 55 on `capabilities` to your emulator name
5. Please make sure your emulator has been active / running
6. Run `npm run test:emulator` in `fe-native-app-boilerplate-tests` project directory
7. Tests report available at `fe-native-app-boilerplate-tests/.reports/html/index.html`

## Run in device mode

1. Copy the `app-release.apk` file to `fe-native-app-boilerplate-tests/.apps/`. If `.apps/` directory doesn't exists, please create manually.
2. Change directory to `fe-native-app-boilerplate-tests` project directory
3. Open `wdio.conf.js`
4. Change value of `appium:deviceName` at line: 56 on `capabilities` to your device name connected to the computer
5. Please make sure your device detected with command: `adb devices`
6. Run `npm test` in `fe-native-app-boilerplate-tests` project directory
7. Tests report available at `fe-native-app-boilerplate-tests/.reports/html/index.html`
