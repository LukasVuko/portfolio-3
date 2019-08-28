var acc = document.getElementsByClassName('accordion');
var i;
console.log(acc);
for (i = 0; i < acc.length; i++) {
  console.log(i);
  acc[i].addEventListener('click', function() {
    let panel = document.getElementsByClassName('panel')[0];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = '0';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
