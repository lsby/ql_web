var nodemon = require('gulp-nodemon')
var { watch } = require('gulp')

exports.default = function defaultTask(cb) {
    nodemon()
    cb()
}
// watch(**/*.js, _=>_)
