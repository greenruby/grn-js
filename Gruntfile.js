module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '**/*.html',
          'sass/*.{scss,sass}',
          'css/{,*/}*.{css,png,jpg,jpeg,gif,svg}',
          'js/{,*/}*.js',
          'data/{,*/}*.json'
        ]
      },
      jshint: {
        files: 'js/{,*/}*.js',
        tasks: ['jshint'],
        options: {
          interrupt: true,
        },
      },
      compass: {
        files: ['sass/*.{scss,sass}'],
        tasks: ['compass:dev']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: {
      src: ['./js/{,*/}*.js', './*.js', '!./js/angular.js','!./js/angular-route.js']
      }
    },
    compass: {
      dev: {
        options: {
          src: 'sass',
          dest: 'css',
          images: 'images'
        }
      }
    },
    connect: {
      options: {
        port: 8000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            './'
          ]
        }
      }
    }
  });

  grunt.registerTask('server', [
    'jshint',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('compass', [
    'compass'
  ]);

  grunt.registerTask('test', [
    'jshint'
  ]);
};
