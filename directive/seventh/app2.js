angular.module("myApp",[])
.controller('myCtrl', ['$scope', function($scope){
	$scope.name = "jvid"
}])
.directive('myDir',function(){
	return {
		restrict:'ECMA',
		transclude:true,
		scope:{},
		templateUrl:'tpl2.html',
		link:function(scope,element){
			scope.name = 'jingduo'
		}
	}
})
