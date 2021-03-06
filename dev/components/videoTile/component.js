'use strict';
(function (angular) {
  angular.module('app').component('videoTile', {
    templateUrl: 'components/videoTile/tpl.html',
    controller: ctrl,
    controllerAs: 'vm',
    bindings: {
      onSendClick: '&',
      video: '<'
    }
  });

  ctrl.$inject = [];
  function ctrl() {
    var vm = this;
  }
})(angular);