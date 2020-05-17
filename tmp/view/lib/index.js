import $ from 'jquery'

export var post = url => data => new Promise((res, req) => $.post(url, data, data => res(data)))
