(function (angular) {
  var app = angular.module('app');

  app.controller('libraryCtrl', ctrl);

  ctrl.$inject = ['libraryService', 'uploadService'];
  function ctrl(libraryService, uploadService) {
    var vm = this;

    vm.showRecordPopup = false;
    vm.recordedData = null;

    libraryService.getVideos().then(function (res) {
      vm.list = res.data.data;
    });

    vm.recordBtnClick = function () {
      vm.showRecordPopup = true;
    };

    vm.closeRecordPopup = function () {
      vm.showRecordPopup = false;
    };

    vm.finishRecord = function (data) {
      vm.recordedData = data;
    };

    vm.sendRecordClick = function (name) {
      name = name || '';
      uploadService.sendFile(vm.recordedData.video, name + '.wmv');
    };

    vm.uploadBtnClick = function () {
      console.log('uploadBtnClick');
    };
  }
})(angular);