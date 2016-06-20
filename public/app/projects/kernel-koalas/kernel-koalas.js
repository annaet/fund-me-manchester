'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:KernelKoalasCtrl
 * @description
 * # KernelKoalasCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('KernelKoalasCtrl', function ($scope) {
  })

  .controller('KernelKoalasAboutCtrl', function ($scope) {
  })

  .controller('KernelKoalasRaisedCtrl', function ($scope) {
  })

  .controller('KernelKoalasDonateCtrl', function ($scope, send) {
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
