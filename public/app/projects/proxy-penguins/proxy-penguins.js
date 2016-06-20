'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:ProxyPenguinsCtrl
 * @description
 * # ProxyPenguinsCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('ProxyPenguinsCtrl', function ($scope) {
  })

  .controller('ProxyPenguinsAboutCtrl', function ($scope) {
  })

  .controller('ProxyPenguinsRaisedCtrl', function ($scope) {
  })

  .controller('ProxyPenguinsDonateCtrl', function ($scope, send) {
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
