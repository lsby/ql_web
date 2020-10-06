import Vue from 'vue/dist/vue'

export default function (data) {
    new Vue({
        el: '#app',
        delimiters: ['||', '||'],
        data
    })
    return data
}
