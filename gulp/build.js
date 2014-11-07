var gulp = require('gulp')
var runSequence = require('run-sequence')

module.exports = function (config) {
  gulp.task('build', function (callback) {
    runSequence('clean', ['browserify', 'less', 'html', 'moveLocalization', 'moveCss'], callback)
  })
}