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
	    <article class="blog-post" href="https://v1nc.github.io{{ post.url }}">
	        <h2 href="https://v1nc.github.io{{ post.url }}">{{ post.date | date_to_string }}</h2>
	        <p href="https://v1nc.github.io{{ post.url }}">{{ post.title }}">{{ post.title }}</p>
	    </article>
    {% endfor %}
</article>
