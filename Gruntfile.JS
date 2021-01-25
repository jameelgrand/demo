/*global module*/
/*jshint camelcase:false*/ // because of gruntConfig.qunit_junit
module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // convenience
    grunt.registerTask('default', ['qunit_junit', 'qunit']);


    // clean
    grunt.loadNpmTasks('grunt-contrib-clean');
    gruntConfig.clean = {
        output: ['report']
    };

    grunt.registerTask('lint', 'jshint');

    // test
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-qunit-istanbul');
    gruntConfig.qunit = {
        src: ['application/index.html'],
        options: {
        coverage: {
          src: ['application/*.js'],
          instrumentedFiles: 'temp/',
          htmlReport: 'report/coverage',
          coberturaReport: 'report/',
          linesThresholdPct: 20
        }
        }
    };
    grunt.loadNpmTasks('grunt-qunit-junit');
    gruntConfig.qunit_junit = {
        options: {
            dest: 'report/'
        }
    };

    

    // css lint

    grunt.loadNpmTasks('grunt-contrib-csslint');
    gruntConfig.csslint = {
      options: {
    formatters: [
      {id: 'junit-xml', dest: 'report/csslint_junit.xml'},
      {id: 'checkstyle-xml', dest: 'report/csscheckstyle.xml'}
    ]
  },
  strict: {
    options: {
      import: false
    },
    src: ['application/*.css']
  }
};


    // grunt
    grunt.initConfig(gruntConfig);
};