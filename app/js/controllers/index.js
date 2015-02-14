'use strict';

angular.module('myApp')

  .config(function ($routeProvider) {
    $routeProvider.when('/index', {
      templateUrl: 'partials/index.html',
      controller: 'IndexCtrl'
    });
  })

  .controller('IndexCtrl', function ($scope) {



  });
