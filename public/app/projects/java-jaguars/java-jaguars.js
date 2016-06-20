'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:JavaJaguarsCtrl
 * @description
 * # JavaJaguarsCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('JavaJaguarsCtrl', function ($scope) {
  })

  .controller('JavaJaguarsAboutCtrl', function ($scope) {
  })

  .controller('JavaJaguarsRaisedCtrl', function ($scope) {
  })

  .controller('JavaJaguarsDonateCtrl', function ($scope, send) {
    $scope.sendBronze = function() {
      send.bronze();
    };
    $scope.sendSilver = function() {
      send.silver();
    };
    $scope.sendGold = function() {
      send.gold();
    };
  });
