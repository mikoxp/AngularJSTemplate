my.controller('myCtrl', ['$scope','$resource','$location',
  function ($scope,$resource,$location) {

    $scope.text=window.location.href;
    $scope.roles = [
      'guest',
      'user',
      'customer',
      'admin'
    ];
    $scope.user = {
      roles: ['user']
    };
    $scope.page=10;
    $scope.y=[];
    for (i = 0; i < 50; i++) {
      $scope.y.push(i);
    }


  }]);