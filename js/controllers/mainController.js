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
    //--------------------------------------------------------------------------------------------------------------
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };

  }]);