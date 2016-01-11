module.exports = function(grunt) {
    //load grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: ['dist'],
            electron: ['dist/Electron.app/Contents/Resources/app/']
        },
        wiredep: {
            task: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: ['app/index.html'],
                exclude: ['bower_components/jquery/dist/jquery.js']
            }
        },
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'app/styles/main.css': 'app/styles/main.scss'
                }
            }
        },
        copy: {
            electron: {
                expand: true,
                cwd: 'node_modules/electron-prebuilt/dist/',
                src: ['**'],
                dest: 'dist/'

            },
            dist: {
                expand: true,
                cwd: '',
                src: ['app/**', 'bower_components/**', 'node_modules/jquery/**', 'LICENSE', 'main.js', 'package.json'],
                dest: 'dist/Electron.app/Contents/Resources/app/'
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', function() {
        console.log('hi');
    });

    // Default task(s).
    grunt.registerTask('dist', function() {
        grunt.task.run([
            //'clean:dist',
            'clean:electron',
            'wiredep',
            'sass',
            //'copy:electron',
            'copy:dist'
        ]);
    });

};