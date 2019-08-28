var acc = document.getElementsByClassName('accordion');

for (let i = 0; i < 3; i++) {
  acc[i].addEventListener('click', function() {
    let panel = document.getElementsByClassName('panel')[i];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = '0';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
