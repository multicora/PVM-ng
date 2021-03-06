'use strict';
(function (angular) {
  angular.module('app').directive('fileUploader', directive);

  directive.$inject = ['uploadService'];
  function directive(uploadService) {
    return {
      templateUrl: 'components/fileUploader/tpl.html',
      link: link,
      scope: {
        url: '@',
        inputId: '@',
        uploadEnd: '&',
        uploadStart: '&',
        onError: '&'
      }
    };

    function link(scope, element, attrs) {
      var input = element.find('input');

      input.on('change', function (event) {
        if (event.target.files[0]) {
          uploadService.sendFile('/api/video', event.target.files[0]).then(uploadEnd, onError);
        }
        event.target.value = null;
        scope.uploadStart();
      });

      function uploadEnd() {
        scope.uploadEnd();
      }

      function onError(err) {
        scope.onError(err);
      }
    }

  }
})(angular);