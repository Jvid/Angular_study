angular.module("myApp",[])
.filter('testFilter',function () {
	return function(num) {
		return num/2;
	}
})
.controller('myCtrl', ['$scope', function($scope){
	$scope.numbers = [1,2,3,4,5,6]
}])