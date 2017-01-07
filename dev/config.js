'use strict';
(function (angular) {
  var app = angular.module('app');

  app.config(config);

  config.$inject = ['$routeProvider'];
  function config($routeProvider) {
    // $routeProvider.when('auth', {
    //   controller: 'authCtrl',
    //   controllerAs: 'vm',
    //   templateUrl: ''
    // });
    $routeProvider.when('/library', {
      controller: 'libraryCtrl',
      controllerAs: 'vm',
      templateUrl: 'library/tpl.html'
    }).when('/', {
      redirectTo: '/library'
    }).otherwise({ redirectTo: '/' });
  }
})(angular);