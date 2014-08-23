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
            styles: './styles/'
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

        watch: {
            styles: {
                files: ['<%= meta.styles %>**/*.scss'],
                tasks: ['styles']
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
};