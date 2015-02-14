module.exports = function (grunt) {

  var path = require('path');

  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  require('time-grunt')(grunt);

  // Project configuration
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt'),
    jitGrunt: true,
    data: {
      appRoot: 'app',
      buildRoot: 'build',
      webRoot: 'public'
    }
  });

  // Default task
  grunt.registerTask('default', ['watch']);

  // Build task
  grunt.registerTask('build', [
    'clean:build',
    'bower_concat',
    'concat:scripts',
    'less_imports:all',
    'less:imports',
    'copy:html',
    'copy:images'
  ]);

  // Optimization task (must be ran after the 'build' task)
  grunt.registerTask('optimize', [
    'cssmin:build',
    'ngAnnotate:build',
    'uglify',
    'cssmin',
    'useminPrepare',
    'filerev',
    'usemin'
  ]);

  // Moves the build to the public folder
  grunt.registerTask('publish', [
    'clean:public',
    'copy:build',
    'clean:build'
  ]);

  // Development build task
  grunt.registerTask('dev', [
    'build',
    'publish'
  ]);

  // Distribution build task
  grunt.registerTask('dist', [
    'jshint',
    'build',
    'optimize',
    'publish'
  ]);

};
