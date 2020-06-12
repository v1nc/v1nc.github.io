---
title: "Telegram message to HTML"
subtitle: "A handy function""
layout: blog
date: 2020-06-12
permalink: /blog/:year/:month/:day/:title:output_ext
---
Telegram does not provide messages formatted in HTML.
A message comes with entities of styled text parts, but you can not send a message with formatted by entities.
If you need to save formatted mssages, e.g. to send them to user, you can use my handy function:

## tlg_message_to_html(message)
<pre><code>
def tlg_mesage_to_html(message):
</code></pre>
