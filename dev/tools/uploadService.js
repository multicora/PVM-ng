'use strict';
(function(angular) {
  var app = angular.module('app');

  app.service('uploadService', service);

  service.$inject = ['$http'];
  function service($http) {
    this.sendFile = function(data, name) {
        var formData = new FormData();
        formData.append('file', data);
        formData.append('videoName', name);

        $http.post(
          "/api/video",
          formData,
          {
            withCredentials: false,
            headers: {
              'Content-Type': void 0
            },
            transformRequest: angular.identity,
            responseType: "arraybuffer"
          }
        ).then(
          function(response, status, headers, config) {
            console.log(response);

            // if (status == 200 || status == 202) //do whatever in success
            // else // handle error in  else if needed 
          },
          function(error, status, headers, config) {
            console.log(error);

            // handle else calls
          }
        );
      }
  }
})(angular);