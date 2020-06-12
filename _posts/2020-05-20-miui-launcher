---
title: "MIUI 11 change launcher"
subtitle: "Bypass the restriction"
layout: blog
date: 2020-05-20
permalink: /blog/:year/:month/:day/:title:output_ext
---

_Since MIUI updated to version 11, it restricts setting your default launcher.
You can only set "verified launcher" as default.
But its easy to bypass that._

## how the restriction works:

Xiaomi created a custom activity for choosing the default launcher.
If you did not download the launcher from a "trusted source", a dialog tells you that you can not select it.

## bypass:

Luckily Xiaomi did not remove the normal activity.
You can open it with the following command
<code>am start -n com.android.permissioncontroller/com.android.packageinstaller.role.ui.HomeSettingsActivity --user 0</code>
