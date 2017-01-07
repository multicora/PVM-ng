'use strict';
(function(angular) {
  var app = angular.module('app');

  app.service('authService', service);

  service.$inject = ['$http'];
  function service($http) {
    this.login = function (login, password) {
      return $http.post('/api/api/login', {
        login: login,
        password: password
      });
    };

    this.setToken = function (token) {
      return localStorage.setItem('biz.authToken', token);
    };

    this.getToken = function () {
      return localStorage.getItem('biz.authToken');
    };

    this.clearToken = function () {
      return localStorage.removeItem('biz.authToken');
    };
  }
})(angular);