(function (angular) {
  var app = angular.module('app');

  app.controller('authCtrl', ctrl);

  ctrl.$inject = ['$location', 'authService'];
  function ctrl($location, authService) {
    var vm = this;

    vm.authenticate = function(login, password) {
      authService.login(login, password).then(function (res) {
        if (res.data.error) {
          vm.errorMessage = res.data.message;
        } else {
          authService.setToken(res.data.token);
          $location.path('/');
          // TODO: browser should ask to store password
        }
      });
    }
  }
})(angular);