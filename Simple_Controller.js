<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <title>Controller Example</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script>
    angular.module('myApp', [])
      .controller('MyCtrl', function($scope) {
        $scope.message = "Welcome to AngularJS!";
      });
  </script>
</head>
<body ng-controller="MyCtrl">
  <h2>{{ message }}</h2>
</body>
</html>
