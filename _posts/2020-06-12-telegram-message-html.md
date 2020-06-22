---
title: "Telegram message to HTML"
subtitle: "A handy function"
layout: blog
date: 2020-06-12
permalink: /blog/:year/:month/:day/:title:output_ext
---
Telegram does not provide messages formatted in HTML.
A message comes with entities of styled text parts, but you can not send a message formatted by the same entities.


_If you need to save formatted mssages, e.g. to send them to user, you use my handy function:_

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
	last_end=0
	counter = 0
	for e in entities:
		if e.type in entity_types:
			if last_end > e.offset:
				counter-=last_end_length
			tag = entity_types[e.type]
			text = text[:e.offset+counter-cmd_offset]+"<"+tag+">"+text[e.offset+counter-cmd_offset:e.offset+e.length+counter-cmd_offset]+"</"+tag+">"+text[e.offset+counter+e.length-cmd_offset:]
			counter +=5+(len(tag)*2)
			if last_end > e.offset:
				counter+=last_end_length
			last_end_length = 3+len(tag)
		elif e.type == "text_link" and len(e.url) > 0:
			if last_end > e.offset:
				counter-=last_end_length
			url = e.url
			text = text[:e.offset+counter-cmd_offset]+"<a href='{}'>".format(url)+text[e.offset+counter-cmd_offset:e.offset+e.length+counter-cmd_offset]+"</a>"+text[e.offset+counter+e.length-cmd_offset:]
			counter+=15+len(url)
			if last_end > e.offset:
				counter+=last_end_length
			last_end_length=4
		elif e.type == "text_mention":
			if last_end > e.offset:
				counter-=last_end_length
			user = e.user 
			url = "tg://user?id={}".format(user["id"])
			text = text[:e.offset+counter-cmd_offset]+"<a href='{}'>".format(url)+text[e.offset+counter-cmd_offset:e.offset+e.length+counter-cmd_offset]+"</a>"+text[e.offset+counter+e.length-cmd_offset:]
			counter+=15+len(url)
			if last_end > e.offset:
				counter+=last_end_length
			last_end_length=4
		last_end = e.offset + e.length
	return text
</code></pre>
