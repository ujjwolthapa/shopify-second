var sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const themekit = require('@shopify/themekit');
gulp.task('sass',function()
{
    return gulp.src('scss/global.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets'))
})
gulp.task('watch',function(){
    gulp.watch('scss/*.scss',gulp.series('sass'))
})