module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        options: {
          sourceMap: false,
        },
        files: {
          'dist/scrolldown.min.js': ['src/scrolldown.js'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};