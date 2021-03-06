var runSequence = require('run-sequence')

module.exports = function (gulp, config) {
  gulp.task('build', function (callback) {
    runSequence = runSequence.use(gulp)
    runSequence('clean', ['browserify', 'less', 'html', 'copy', 'moveCss', 'moveServer'], callback)
  })
}
