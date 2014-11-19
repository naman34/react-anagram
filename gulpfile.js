'use strict';
var gulp = require('gulp');

var browserify = require('browserify');
var to5 = require('6to5-browserify');

var source = require('vinyl-source-stream');

// browserify({ debug: true })
//   .transform(to5)
//   .require("./example/fluid/app.js", { entry: true })
//   .bundle()
//   .on("error", function (err) { console.log("Error : " + err.message); });

// will look into this later. Probably don't need it.
gulp.task('browserify', function() {
  return browserify({debug: true})
    .transform(to5)
    .require('./example/fluid/app.js', { entry: true })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./example/fluid/'));
});

gulp.task('default', ['browserify'], function(){
  gulp.watch(['./example/fluid/app.js', './src/*.js'], ['browserify']);
});