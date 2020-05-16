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
	    	<p class="date"><{{ post.date | date_to_string }}</p>
	        <h2><a href="https://v1nc.github.io{{ post.url }}">{{ post.title }}</a></h2>
	        <p><a href="https://v1nc.github.io{{ post.url }}">{{ post.subtitle }}</a></p>
	    </article>
    {% endfor %}
</article>
