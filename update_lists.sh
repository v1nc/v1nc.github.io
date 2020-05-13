dir_to_json(){
	echo '{"docs": [' >$2
	for dir in $1    
	do
		dir=${dir%*/}  
		if [ $dir != "assets" ] && [ $dir != "_data" ] && [ $dir != "node_modules" ] && [ $dir != "_layouts" ];then
			printf '{"title": "%s","url":"%s"},' $dir $dir >>$2
		fi
	done
	echo ']}' >>$2
}

dir_to_json "work/" _data/work.json
