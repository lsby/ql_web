var nodemon = require('gulp-nodemon')
var { watch } = require('gulp')

exports.default = function defaultTask() {
    nodemon()
}
// watch(**/*.js, _=>_)
