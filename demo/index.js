var Overlayer = require('../overlayer')
document.body.innerHTML = '<span/>'
var speed = 1000
var overlayer = Overlayer({ speed: speed, auto: false })

function ಠ_ಠ () {
  overlayer.show()
  setTimeout(function () {
    overlayer.hide()
    setTimeout(ಠ_ಠ, speed * 2)
  }, speed * 2)
}
ಠ_ಠ()
