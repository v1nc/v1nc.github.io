function copy(id) {
  var copyText = document.getElementByName(id);
  copyText.select();
  copyText.setSelectionRange(0, 9999999999);
  document.execCommand("copy");
} 