# Run in browser
`ionic serve`

# Run on a physical device: Android
Ionic uses Capacitor to deploy to mobile devices. 

Capacitor uses Android Studio to run apps on physical devices [`1`], so everything needs to be set up as per Android Studio docs [`2`].

Then, run:

`ionic capacitor run android` [`3`]

# Refs
1. https://capacitorjs.com/docs/android
2. https://developer.android.com/studio/run/device
3. https://ionicframework.com/docs/cli/commands/capacitor-run