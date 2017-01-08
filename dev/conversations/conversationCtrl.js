(function (angular) {
  var app = angular.module('app');

  app.controller('conversationCtrl', ctrl);

  ctrl.$inject = ['$routeParams', 'conversationsService'];
  function ctrl($routeParams, conversationsService) {
    var vm = this;

    conversationsService.get($routeParams.id).then(function (res) {
      console.log(res.data);
    });
  }
})(angular);