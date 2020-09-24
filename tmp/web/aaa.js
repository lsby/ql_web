/** @jsx hyperScript **/

const my = <div id="name">Hello, world!</div>

export default my

function hyperScript(nodeName, attributes, ...args) {
    var children = args.length ? [].concat(...args) : []
    return render({ nodeName, attributes, children })

    function render(vnode) {
        if (vnode.split) return document.createTextNode(vnode)
        var node = document.createElement(vnode.nodeName)
        var attrs = vnode.attrbutes || {}
        Object.keys(attrs).forEach(item => node.setAttribute(item, attrs[item]))
        vnode.children.forEach(item => node.appendChild(render(item)))
        return node
    }
}
