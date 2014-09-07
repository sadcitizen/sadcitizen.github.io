/* jshint node:true */
module.exports = function(grunt) {
    'use strict';

    var banner = '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:MM:ss TT Z") %> */\n\n' +
        '/*\n' +
        '+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n' +
        '|i|n|s|t|a|n|c|e|o|f|.|p|r|o|\n' +
        '+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n' +
        '*/\n\n';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        meta: {
            public: './public/',
            styles: './styles/',
            scripts: './public/js/'
        },

        sass: {
            styles: {
                files: {
                    '<%= meta.public %>css/styles.css': '<%= meta.styles %>styles.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9'],
                diff: true
            },

            styles: {
                src: '<%= meta.public %>css/styles.css',
                dest: '<%= meta.public %>css/styles.prefixed.css'
            }
        },

        jscs: {
            src: ['<%= meta.scripts %>*.js', '!<%= meta.scripts %>*.min.js', 'gruntfile.js'],
            options: {
                config: '.jscsrc'
            }
        },

        jshint: {
            src: '<%= jscs.src %>',
            options: {
                jshintrc: '.jshintrc'
            }
        },

        uglify: {
            scripts: {
                src: '<%= meta.scripts %>share.js',
                dest: '<%= meta.scripts %>share.min.js',
                options: {
                    banner: banner
                }
            }
        },

        watch: {
            styles: {
                files: ['<%= meta.styles %>**/*.scss'],
                tasks: ['styles']
            },
            scripts: {
                files: '<%= jscs.src %>',
                tasks: ['scripts']
            }
        },

        cssmin: {
            production: {
                files: {
                    '<%= meta.public %>css/styles.min.css': '<%= meta.public %>css/styles.prefixed.css'
                },
                options: {
                    banner: banner
                }
            }
        },

        clean: {
            styles: {
                src: ['<%= meta.public %>css/styles.css', '<%= meta.public %>css/styles.prefixed.css']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('styles', [
        'sass',
        'autoprefixer',
        'cssmin',
        'clean'
    ]);
    grunt.registerTask('scripts', [
        'jscs',
        'jshint',
        'uglify'
    ]);
};