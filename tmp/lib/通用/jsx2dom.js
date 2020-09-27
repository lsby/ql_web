import vhtml from 'vhtml'
import $ from 'jquery'

function jsx2dom(...a) {
    var htmlstr = vhtml(...a)
    return $(htmlstr)
}

window.jsx2dom = jsx2dom
