# v1nc
_don't be the best, be the only_

<article class="blog-list">
    <h2>work</h2>
    {% for item in site.data.work.docs%}
            <article class="blog-post">
                <p class="date">{{ post.date | date_to_string }}</p>
                <h2><a href="{{ item.url }}">{{ item.title }}</a></h2>
            </article>
    {% endfor %}
</article>


<article class="blog-list">
    <h2>blog</h2>
    {% for post in site.posts %}
	    <article class="blog-post">
	    	<p class="date">{{ post.date | date_to_string }}</p>
	        <h2><a href="https://v1nc.github.io{{ post.url }}">{{ post.title }}</a></h2>
	        <p><a href="https://v1nc.github.io{{ post.url }}">{{ post.subtitle }}</a></p>
	    </article>
    {% endfor %}
</article>
