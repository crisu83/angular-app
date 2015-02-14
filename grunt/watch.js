module.exports = function (grunt, options) {
  return {
    app: {
      files: [
        '<%= appRoot %>/js/**/*.*',
        'app/less/**/*.*',
        'app/vendor/bower/*.*',
        'app/views/*.*',
        'grunt/**/*.js',
        'Gruntfile.js'
      ],
      tasks: ['dev'],
      options: {
        spawn: false,
        livereload: true
      }
    }
  };
};