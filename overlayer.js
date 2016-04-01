var maxz = require('maxz')
var animates = require('animates')

module.exports = function overlayer (opts) {
  opts = opts || {}
  if (typeof opts.speed === 'undefined') opts.speed = 1000
  var cleanups = []
  var el = document.createElement('div')
  el.setAttribute('style', 'position:fixed;width:100%;height:100%;top:0px;left:0px;background:rgba(0,0,0,0.7)')
  if (opts.auto !== false) show()
  return { el: el, show: show, hide: hide, destroy: destroy }

  function show (speed) {
    el.style.zIndex = maxz()
    fade(1, speed)
  }

  function hide (speed) {
    fade(0, speed)
  }

  function destroy () {
    stop()
    if (el.parentElement) el.parentElement.removeChild(el)
  }

  function stop () {
    while (cleanups.length) cleanups.pop()()
  }

  function stoppable (timeout) {
    cleanups.push(function cleanup () { clearTimeout(timeout) })
  }

  function fade (opacity, speed) {
    if (typeof speed === 'undefined') speed = opts.speed
    stop()
    document.body.appendChild(el)
    if (speed) {
      cleanups.push(animates(el, { opacity: opacity }, { speed: speed }))
      if (!opacity) stoppable(setTimeout(destroy, speed))
    } else {
      el.style.opacity = opacity
      if (!opacity) destroy()
    }
  }
}
