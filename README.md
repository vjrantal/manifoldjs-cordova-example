# manifoldjs-cordova-example

## Purpose

This project is an example of how to use Cordova-based functionality in a Web site
if you have used ManifoldJS to package your site as a mobile app.

This example has been tested on Android and iOS.

## Functionality

When accessed with a normal Web browser, doesn't use Cordova-based functionality.

When accessed via an app packaged with ManifoldJS, shows network connection information
that depends on functionality available as a Cordova plugin.

## Limitations

### Doesn't work with secured sites on iOS 9.0 if built using iOS SDK 9.0

This approach doesn't work on iOS 9.0 if your Web site needs to be accessed over secure
connection (i.e., using the https scheme) and is built with the 9.0 SDK. This is because
then, iOS 9.0 doesn't seem to allow "mixed content" where the site origin is "secured",
but some connections would not be.

A workaround is to build using an older SDK. It was tested that when building with Xcode 6.4
using iOS SDK 8.4, the resulting app worked on iOS 9.0 as well.

### Additional step required for iOS 9.0 onwards for insecured sites

The iOS 9.0 release introduced App Transport Security, which requires explicit allowance
of non-encrypted connections. This can be worked around with a modification to the app's
plist file after ManifoldJS has generated the iOS project.

### Requires custom version of cordova-plugin-file

The upstream version of cordova-plugin-file didn't yet support accessing files in the assets
directory on Android and until the support is upstreamed, a custom version from
https://github.com/vjrantal/cordova-plugin-file/tree/android-assets-access needs to be used.

## Hosted example

This example is hosted at http://manifoldjs-cordova-example.azurewebsites.net/ and
can be tried out by packaging an app with ManifoldJS and installing it onto a supported
device.

```
$ manifoldjs http://manifoldjs-cordova-example.azurewebsites.net/
$ cd Example/cordova
$ cordova plugin add https://github.com/vjrantal/cordova-plugin-file.git#android-assets-access
$ cordova run ios
```

## Running locally

```
$ npm install
$ npm start
```

```
$ open http://localhost:3000/
```
