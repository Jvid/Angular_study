angular.module("myApp",['module'])
.controller('myCtrl', ['$scope','sayHello', function($scope,sayHello){
	$scope.name = sayHello.bb;
	console.log($scope.name)
	sayHello.bb = "jingduo";
	$scope.name = sayHello.bb;
	console.log($scope.name)
	sayHello.aa();
}])