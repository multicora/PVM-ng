(function (angular) {
  var app = angular.module('app');

  app.controller('libraryCtrl', ctrl);

  ctrl.$inject = ['libraryService'];
  function ctrl(libraryService) {
    libraryService.getVideos().then(function (res) {
      console.log(res.data);
    });
  }
})(angular);