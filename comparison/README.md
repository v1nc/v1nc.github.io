# Live User.js comparison
This is inspired by [compare-user.js](https://github.com/jm42/compare-user.js). I also took [4 methods](https://github.com/v1nc/v1nc.github.io/blob/master/comparison/index.js) from it and changed them to run in the browser.

## Features:
* #### live loading user.js configurations in the browser
* #### compare user.js prefs in a responsive table
* #### click on a value in the table to copy the pref string to your clipboard:

  e.g. you click on `false` in row `alerts.showFavicons` => `user_pref("alerts.showFavicons", false);` is copied to your clipboard
* #### only js, no node needed
