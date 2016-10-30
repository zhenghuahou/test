require('./css/demo.scss');

var Ripple = e => { // event
    var tar = e.target
    // var ripple = document.querySelector('#ripple')
    // ripple && ripple.parentNode.removeChild(ripple)
    var w = tar.offsetWidth
    var h = tar.offsetHeight
    w >= h ? h = w : w = h

    var offleft = getOffset(tar, 'offsetLeft')
    var offtop = getOffset(tar, 'offsetTop')

    var left = e.clientX - offleft - w / 2;
    var top = e.clientY - offtop - h / 2

    const ripple = tar.querySelector('.ripple')

    if (ripple) {
        ripple.style.cssText = `width:${w}px;height:${h}px;left:${left}px;top:${top}px;`
        ripple.classList.add('ripple_active')
    } else {
        var r = `<div style="width:${w}px;height:${h}px;left:${left}px;top:${top}px" class="ripple"></div>`
        console.log(" w:",w," h:",h);
        tar.insertAdjacentHTML('afterbegin', r)
        var _ripple = tar.querySelector('.ripple')

        _ripple.classList.add('ripple_active')
        _ripple.addEventListener('animationend', function() {
            this.parentNode.removeChild(this)
        })

    }
}

var getOffset = function(el, type) {
  var off = el[type]
  var par = el.offsetParent

  while (par) {
    off += par[type]
    par = par.offsetParent;

  }

  return off
}

box.onclick = function(e) {
  if (e.target.tagName.toLowerCase() === 'li') {
    Ripple(e)
  }
}



