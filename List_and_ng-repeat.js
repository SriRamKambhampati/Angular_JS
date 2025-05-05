<!DOCTYPE html>
<html ng-app>
<head><title>List Example</title></head>
<body ng-init="fruits=['Apple','Banana','Cherry']">
  <ul>
    <li ng-repeat="fruit in fruits">{{ fruit }}</li>
  </ul>
</body>
</html>
