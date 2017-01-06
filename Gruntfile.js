"use strict";

module.exports = function (grunt) {
    
    //Time how long tasks take. Can help with optimizing build time
    require('time-grunt')(grunt);
    //Automatically loads reuired grunt tasks
    require('jit-grunt')(grunt);
    
    //Define the configuration for all tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        //JSHint config
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'app/scripts/{,*/}*.js'
                ]
            }
        }
    });
    
    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('default', ['build']);
};