# v1nc
_don't be the best, be the only_

## work:
<ul>
   {% for item in site.data.work.docs %}
      <li><a href="{{ item.url }}">{{ item.title }}</a></li>
   {% endfor %}
</ul>


<article class="blog-list">
    <h2>blog</h2>
    {% for post in site.posts %}
	    <article class="blog-post">
	        <h2><a href="https://v1nc.github.io{{ post.url }}">{{ post.date | date_to_string }}</a></h2>
	        <p><a href="https://v1nc.github.io{{ post.url }}">{{ post.title }}</a></p>
	    </article>
    {% endfor %}
</article>
