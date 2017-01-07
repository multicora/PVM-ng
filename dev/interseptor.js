'use strict';
(function(angular) {
  var app = angular.module('app');

  app.factory('interseptor', interseptor);

  interseptor.$inject = ['loadingService', '$location'];
  function interseptor(loadingService, $location) {
    return {
      request: function(request) {
        loadingService.showSpinner();
        return request;
      },
      response: function(response) {
        loadingService.hideSpinner();
        return response;
      },
      responseError: function(response) {
        loadingService.hideSpinner();
        if (response.status == 401) {
          $location.path('/login');
        }
        return response;
      }
    };
  }
})(angular);