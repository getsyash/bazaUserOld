cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.razorpay.cordova.RazorpayCheckout",
      "file": "plugins/com.razorpay.cordova/www/RazorpayCheckout.js",
      "pluginId": "com.razorpay.cordova",
      "clobbers": [
        "RazorpayCheckout"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-firebase-authentication.FirebaseAuthentication",
      "file": "plugins/cordova-plugin-firebase-authentication/www/FirebaseAuthentication.js",
      "pluginId": "cordova-plugin-firebase-authentication",
      "merges": [
        "cordova.plugins.firebase.auth"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-stripe.stripe",
      "file": "plugins/cordova-plugin-stripe/www/CordovaStripe.js",
      "pluginId": "cordova-plugin-stripe",
      "clobbers": [
        "cordova.plugins.stripe"
      ]
    }
  ];
  module.exports.metadata = {
    "com.razorpay.cordova": "0.16.1",
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-device": "1.1.7",
    "cordova-support-android-plugin": "1.0.1",
    "cordova-support-google-services": "1.3.1",
    "cordova-plugin-firebase-authentication": "3.0.0",
    "cordova-plugin-splashscreen": "4.1.0",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-stripe": "1.5.3",
    "cordova-plugin-whitelist": "1.3.4"
  };
});