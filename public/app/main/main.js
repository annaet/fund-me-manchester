'use strict';

angular.module('fundMe')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.projects = [{
      name: 'project1',
      team: 'TeamAwesome'
    },{
      name: 'project2',
      team: 'TeamAwesome'
    },{
      name: 'project3',
      team: 'TeamAwesome'
    },{
      name: 'project4',
      team: 'TeamAwesome'
    },];
  }]);
