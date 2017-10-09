var gulp = require('gulp'),
	config = require('../config').server_config,
	GulpSSH = require('gulp-ssh'),
	ext_replace = require('gulp-ext-replace');

var testSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config.test
});

var zsSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config.zs
});

gulp.task('uploadTest', function(){
	gulp.start('uploadStatic', 'uploadBabel');
})

gulp.task('uploadZs', function(){
	gulp.start('uploadStaticZs', 'uploadBabelZs');
})

// 发送代码包到测试服务器
gulp.task('uploadStatic', function () {
  return gulp
    .src('dist/**/*')
    .pipe(testSSH.dest('/usr/share/nginx/html/wx/'))
});

gulp.task('uploadBabel', function () {
  return gulp
    .src('dist/*.html')
    .pipe(ext_replace('.blade.php'))
    .pipe(testSSH.dest('/usr/share/nginx/php/666/resources/views/'))
});

// 发送代码包到正式服务器
gulp.task('uploadStaticZs', function () {
  return gulp
    .src('dist/**/*')
    .pipe(zsSSH.dest('/usr/share/nginx/html/wx/'))
});

gulp.task('uploadBabelZs', function () {
  return gulp
    .src('dist/*.html')
    .pipe(ext_replace('.blade.php'))
    .pipe(zsSSH.dest('/usr/share/nginx/php/666/resources/views/'))
});
