angular.module('myApp',[])
.directive('myDir',function($parse){
	return function(sc,ele,attr,ctrls){
		var m = $parse(sc.a+sc.b)
		angular.element(ele).on('click',function(){
			console.log(m)
			var r = m();
			console.log(r);
		})
	}
})
.controller('myCtrl', ['$scope', function($scope){
	$scope.a = "jing";
	$scope.b = "duo";
}])