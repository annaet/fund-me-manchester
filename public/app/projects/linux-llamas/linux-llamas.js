'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:LinuxLlamasCtrl
 * @description
 * # LinuxLlamasCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('LinuxLlamasCtrl', function ($scope) {
  })

  .controller('LinuxLlamasAboutCtrl', function ($scope) {
  })

  .controller('LinuxLlamasRaisedCtrl', function ($scope) {
  })

  .controller('LinuxLlamasDonateCtrl', function ($scope, send) {
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
