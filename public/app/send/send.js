'use strict';

/**
 * @ngdoc service
 * @name fundmeApp.send
 * @description
 * # send
 * Service in the fundmeApp.
 */
angular.module('fundMe')
  .service('send', function ($http) {
    var bronze = function() {
      console.log('bronze');
      $http({
        method: 'POST',
        url: 'http://anna-nr.mybluemix.net/fundMe',
        data: {
          medal: 'bronze'
        }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    var silver = function() {
      $http({
        method: 'POST',
        url: 'http://anna-nr.mybluemix.net/fundMe',
        data: {
          medal: 'silver'
        }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    var gold = function() {
      $http({
        method: 'POST',
        url: 'http://anna-nr.mybluemix.net/fundMe',
        data: {
          medal: 'gold'
        }
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    return {
      bronze: bronze,
      silver: silver,
      gold: gold
    };
  });
