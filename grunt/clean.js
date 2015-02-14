module.exports = function (grunt, options) {
  return {
    build: '<%= buildRoot %>',
    public: "<%= webRoot %>"
  };
};
