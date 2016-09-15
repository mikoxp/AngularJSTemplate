my.controller('aboutCtrl', ['$scope','$resource','$location',
  function ($scope,$resource,$location) {
    $scope.text=window.location.href;

    
  }]);