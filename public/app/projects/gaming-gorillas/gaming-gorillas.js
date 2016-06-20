'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:GamingGorillasCtrl
 * @description
 * # GamingGorillasCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('GamingGorillasCtrl', function ($scope) {
  })

  .controller('GamingGorillasAboutCtrl', function ($scope) {
  })

  .controller('GamingGorillasRaisedCtrl', function ($scope) {
  })

  .controller('GamingGorillasDonateCtrl', function ($scope, send) {
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
