
mds_to_json(){
	echo '{"docs": [' >$2
	for md in $1/*.md    
	do
		name=$(echo $md | cut -d "/" -f2)
		if [ $name != "README.md" ] ;then
			url=$(echo $name | cut -d "." -f1 )
			title=$(echo $url | tr '[:upper:]' '[:lower:]')
			printf '{"title": "%s","url":"%s"},' $title "$1/$url.html" >>$2
		fi
	done
	echo ']}' >>$2
}
mds_to_json "work" _data/work.json