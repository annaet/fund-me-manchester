'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:EthernetElephantsCtrl
 * @description
 * # EthernetElephantsCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('EthernetElephantsCtrl', function ($scope) {
  })

  .controller('EthernetElephantsAboutCtrl', function ($scope) {
  })

  .controller('EthernetElephantsRaisedCtrl', function ($scope) {
  })

  .controller('EthernetElephantsDonateCtrl', function ($scope, send) {
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
