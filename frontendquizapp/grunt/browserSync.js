module.exports = function () {

    return {
        bsFiles: {
            src: [
                'www/css/*.css',
                'www/img/**',
                'www/js/*.js',
                'www/*.html'
            ]
        },
        options: {
            watchTask: true,
            server: {
                baseDir: "./www"
            }
        }
    };
};
