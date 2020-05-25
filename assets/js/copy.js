function copy(id) {
	console.log("copy",id);
	var copyText = document.getElementsByName(id)[0];
	copyText.select();
	copyText.setSelectionRange(0, 9999999999);
	document.execCommand("copy");
} 