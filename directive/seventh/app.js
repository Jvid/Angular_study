angular.module("myApp",[])
.controller('myCtrl', ['$scope', function($scope){
	$scope.name = "jvid";
	console.log($scope.name);
}])
.directive('myDirective',function(){
	return {
		restrict:'ECMA',
		transclude:true, 
		templateUrl:'tpl.html'
	}
})