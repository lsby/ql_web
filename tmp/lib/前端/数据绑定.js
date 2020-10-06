import Vue from 'vue/dist/vue'

export default function (data) {
    setTimeout(() => {
        new Vue({
            el: '#app',
            delimiters: ['||', '||'],
            data
        })
    }, 0)
}
