import Vue from 'vue/dist/vue.min'

export default function (data, methods, computed) {
    setTimeout(() => {
        data = data || {}
        methods = methods || {}
        computed = computed || {}
        new Vue({
            el: '#app',
            data,
            methods,
            computed
        })
    }, 0)
}
