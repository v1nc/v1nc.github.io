# v1nc
_don't be the best, be the only_

## work:
<ul>
   {% for item in site.data.work.docs %}
      <li><a href="{{ item.url }}">{{ item.title }}</a></li>
   {% endfor %}
</ul>

## blog:
<ul>
   {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> - <a href="https://v1nc.github.io{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
   {% endfor %}
</ul>