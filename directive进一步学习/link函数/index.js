angular.module("myApp",[])
.directive('welcome',function(){
	return {
		restrict:'E',
		template:'<H1>Hello Jvid</h1>',
		link:function(scope,element,attr){
			console.log(scope);
			scope.testNum = 888;
			console.log('Hello Jvid');
		}
	}
})
.controller('myCtrl', ['$scope', function($scope){
	var self = this;
	$scope.testNum = 3
}])