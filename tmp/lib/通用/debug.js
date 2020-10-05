var chalk = require('chalk')
var util = require('util')
var lodash = require('lodash')

module.exports = {
    log(...a) {
        console.log(chalk.blue(('================')))
        for (var x of a) {
            x = lodash.isObject(x) ? util.inspect(x) : x
            x = x.trim()
            console.log(chalk.blue(x))
        }
        return a[0]
    },
    err(...a) {
        console.error(chalk.red('================'))
        for (var x of a) {
            x = lodash.isObject(x) ? util.inspect(x) : x
            x = x.trim()
            console.error(chalk.red(x))
        }
    },
    info(...a) {
        console.log(chalk.green('================'))
        for (var x of a) {
            x = lodash.isObject(x) ? util.inspect(x) : x
            x = x.trim()
            console.log(chalk.green(x))
        }
    }
}
