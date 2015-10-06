
  var africaApp = angular.module('africaApp', []);

  africaApp.controller('countriesController', function($scope, $http) {

    $scope.url = '/countries/api';

    $scope.fetch = function() {
      $http.get($scope.url).success(function(data) {

        $scope.countries = data;
        console.log(data);
      });
    }

    $scope.fetch();

  });
