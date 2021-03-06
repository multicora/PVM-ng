'use strict';
(function (angular) {
  angular.module('app').component('gaButton', {
    templateUrl: 'components/gaButton/tpl.html',
    controller: ctrl,
    controllerAs: 'vm',
    transclude: true,
    bindings: {
      eventCategory: '@',
      eventAction: '@',
      eventLabel: '@',
    }
  });

  ctrl.$inject = [];
  function ctrl() {
    var vm = this;

    vm.clickHandler = function() {
      if (vm.eventCategory && vm.eventAction) {
        ga('send', 'event', vm.eventCategory, vm.eventAction, vm.eventLabel);
      }
    };
  }
})(angular);