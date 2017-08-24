// TASK: gulp adds folder structure too
// TASK: Fix add-images task - currently does nothing


var gulp =  require('gulp'), // Gulp
    sass = require('gulp-sass'), // Sass Compiler
    sourcemaps = require('gulp-sourcemaps'), // sourcemaps, needs to run BEFORE Sass
    webserver = require('gulp-webserver'), // Web Server
    clean = require('gulp-clean'), // Delete-Clean folder
    concat = require('gulp-concat'), // Combine JS files
    uglify = require('gulp-uglify'), // Compress JS files
    lbInclude = require('gulp-lb-include'), // Include HTML templates
    htmlclean = require('gulp-htmlclean'), // Clean HTML file
    replace = require('gulp-replace'), // Replace string
    mkdirp = require('mkdirp'), // Create Directory
    rename = require("gulp-rename"), // Rename files
    exec = require('gulp-exec'), // Runs shell command from gulp
    gulpsync = require('gulp-sync')(gulp), // Sync tasks
    insert = require('gulp-insert'), // Insert string to any file.
    gulpIgnore = require('gulp-ignore'), // Filter gulp selection


    gulp = require('gulp'), // for JS sourcemaps
    // plugin1 = require('gulp-plugin1'), // for JS sourcemaps
    // plugin2 = require('gulp-plugin2'), // for JS sourcemaps

    imagemin = require('gulp-imagemin'); // Optimize Images



var buildfolder = './build/';

var path = {
    srcbase : './src',
    srcassets: './src/assets',
    srcStyles: './src/styles',
    srcjs: './src/scripts',

    // Build Paths
    buildbase : './build',
    buildassets : './build/assets',
    buildStyles : './build/styles',
    buildjs : './build/scripts'
};

/********************* Editable : Project Scripts *********************/

var Scripts = [
path.srcjs + '/lib/*.js',
path.srcjs + '/index.js'];

/********************* End of Project Scripts *********************/

// ===========================** default task

    gulp.task('default', gulpsync.sync([
        'handle-html',
        'handle-html:watch',
        'compilejs',
        'compilejs:watch',
        'copy-images',
        'copy-images:watch',
        'copy-fonts',
        'copy-fonts:watch',
        'copy-img',
        'copy-img:watch',
        'styles',
        'styles:watch',
        'webserver'
    ]));

    // **** Compile SASS
    gulp.task('styles', function() { 
        return gulp.src(path.srcStyles + '/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.buildStyles))
    });
    
    gulp.task('styles:watch', function () { // Watch SASS files
        return gulp.watch(path.srcStyles + '/*.scss', ['styles']) 
    }); 

    
    gulp.task('compilejs', function() { // Concat and Compress Javascript
        return gulp.src(Scripts)
        .pipe(concat('all.js'))
        .pipe(sourcemaps.init())
        // all extra plugins go here
        // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.buildjs+'/'));
    });
    gulp.task('compilejs:watch', function () { // Watch javascript files
        return gulp.watch(path.srcjs+'/*.js', ['compilejs']) 
    }); 

    // **** Generate HTML Files
    gulp.task('handle-html', function() {
            // var slidePath = path.srcbase;
            gulp.src(path.srcbase + '/*.html' ) // Read HTML
            .pipe(lbInclude()) // Apply Templates
            .pipe(htmlclean()) // Minify HTML
            .pipe(gulp.dest(path.buildbase)); // Export Files
    
    });

    gulp.task('handle-html:watch', function () { 
        return gulp.watch( [path.srcbase + '/*.html',path.srcbase + '/templates/*'], ['handle-html']) 
    }); // Watch HTML files

    // **** Copy Images
    gulp.task('copy-images', function() {
        return gulp.src(path.srcassets + '/images/**')
            .pipe(gulp.dest(path.buildassets+'/img'))  // Images
    });

    gulp.task('copy-images:watch', function () { 
        return gulp.watch( [path.srcassets + '/images/**',path.srcassets + '/images/**/**'], ['copy-images']) 
    }); // Watch Images

    // **** Copy Fonts
    gulp.task('copy-fonts', function() {
      return gulp.src(path.srcassets + '/fonts/**')
      .pipe(gulp.dest(path.buildassets+'/fonts'))  // Fonts
    });
    gulp.task('copy-fonts:watch', function () { 
        return gulp.watch( path.srcassets + '/fonts/*', ['copy-fonts']) 
    }); // Watch Fonts

    gulp.task('copy-img', function() {
      // return gulp.src(path.srcassets + '/img/**')
      // .pipe(gulp.dest(path.buildassets +'/img/'))  // images
    });
    gulp.task('copy-img:watch', function () { 
        // return gulp.watch( path.srcassets + '/img/**', ['copy-img']) 
    }); // Watch images


    // **** Start HTTP Server and open default page
    gulp.task('webserver', function() {
      return gulp.src(path.buildbase + '/')
        .pipe(webserver({
          fallback: 'index.html',
          livereload: true,
          directoryListing: { enable: true, path: path.buildbase + 'index.html' },
          open: true
        }));
    });
    //*** END OF DEBUG MODE ---------------------------------------------------------------------------------------------


    //*** OTHER COMMANDS -----------------------------------------------------------------------------------------
    // gulp.task('clean', gulpsync.sync(['debug-clean','build-clean']));

