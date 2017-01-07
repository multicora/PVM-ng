(function (angular) {
  var app = angular.module('app');

  app.controller('libraryCtrl', ctrl);

  ctrl.$inject = ['libraryService'];
  function ctrl(libraryService) {
    var vm = this;

    libraryService.getVideos().then(function (res) {
      vm.list = res.data.data;
    });
  }
})(angular);