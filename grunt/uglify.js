module.exports = function (grunt, options) {
  return {
    scripts: {
      files: {
        '<%= buildRoot %>/js/scripts.js': '<%= buildRoot %>/js/scripts.annotated.js'
      }
    },
    vendor: {
      files: {
        '<%= buildRoot %>/js/vendor.js': '<%= buildRoot %>/js/vendor.js'
      }
    }
  };
};