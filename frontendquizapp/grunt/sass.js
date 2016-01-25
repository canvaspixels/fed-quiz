module.exports = function (grunt) {

    var version = grunt.file.readJSON('package.json').version;

    return {
        dev: {
            files: [{
                expand: true,
                cwd: './www/sass',
                src: ['*.scss'],
                dest: './www/css',
                ext: '.css'
            }]
        }
    };
};
