module.exports = function (grunt) {


    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            headless: {
                options: {
                    outfile: 'specRunner.html',
                    specs: 'test/build/**/*Spec.js',
//                    helpers: ['test/helpers/*Helper.js'],
                    vendor: [],
//                    host: 'https://mysite.com',
//                    '--ignore-ssl-errors': true,
//                    '--web-security': false,
//                    timeout: 120000,
//                    junit: {
//                        path: './test-reports'
//                    }
                }
            },
            headed: {
                options: {
                    outfile: 'test/specRunner.html',
                    specs: 'test/build/**/*Spec.js',
//                    helpers: ['test/helpers/*Helper.js'],
                }
            }
        },
        watch: {
            specs: {
                files: ['test/build/**/*Spec.js', 'test/helpers/*Helper.js'],
                tasks: 'jasmine:headed:build'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jasmine:headless']);

    grunt.registerTask('headless', ['jasmine:headless']);
    grunt.registerTask('headed', ['jasmine:headed:build']);
};