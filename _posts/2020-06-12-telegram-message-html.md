---
title: "Telegram message to HTML"
subtitle: "A handy function"
layout: blog
date: 2020-06-12
permalink: /blog/:year/:month/:day/:title:output_ext
---
Telegram does not provide messages formatted in HTML.
A message comes with entities of styled text parts, but you can not send a message with formatted by entities.


_If you need to save formatted mssages, e.g. to send them to user, you can use my handy function:_

<pre><code>
def message_to_html(og_text,entities,cmd_offset=0):
	text = og_text
	entity_types = {
		"bold" : "b",
		"italic" : "i",
		"underline" : "u",
		"strikethrough" : "s",
		"code" : "code",
		"pre": "pre",
	} 
	counter = 0
	for e in entities:
		if e.type in entity_types:
			tag = entity_types[e.type]
			text = text[:e.offset+counter-cmd_offset]+"<"+tag+">"+text[e.offset+counter-cmd_offset:e.offset+e.length+counter-cmd_offset]+"</"+tag+">"+text[e.offset+counter+e.length-cmd_offset:]
			counter +=5+(len(tag)*2)
		elif e.type == "text_link" and len(e.url) > 0:
			url = e.url
			text = text[:e.offset+counter-cmd_offset]+"<a href='{}'>".format(url)+text[e.offset+counter-cmd_offset:e.offset+e.length+counter-cmd_offset]+"</a>"+text[e.offset+counter+e.length-cmd_offset:]
			counter+=15+len(url)
		elif e.type == "text_mention":
			user = e.user 
			url = "tg://user?id={}".format(user["id"])
			text = text[:e.offset+counter-cmd_offset]+"<a href='{}'>".format(url)+text[e.offset+counter-cmd_offset:e.offset+e.length+counter-cmd_offset]+"</a>"+text[e.offset+counter+e.length-cmd_offset:]
			counter+=15+len(url)
	return text
</code></pre>
