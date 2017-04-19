angular.module("myApp",[])
.directive('welcome',function(){
	return {
		restrict:'E',
		scope:{},//当定义了自己的scope之后就不会继承父级的scope了 自定义之后可以通过scope.$parent找到之前父级的scope
		transclude:true,
		template:'<h1>I am the directive element</h1><ng-transclude></ng-transclude><br /><button ng-click="alertfn()">directivButton</button>',
		link:function(scope){
			console.log(scope)
			setTimeout(function(){
				scope.$parent.$apply(function(){
					scope.$parent.tran.test = "jvid"
				})
			},2000)
			setTimeout(function(){
				scope.$apply(function(){
					scope.$root.rotTest = "I change the root avirable"
				})
			},2000)
		},
		controller:function($scope){
			$scope.alertfn = function(){
				console.log('This is the directive function')
			}
		}
	}
})
.controller('myCtrl', ['$scope','$rootScope', function($scope,$rootScope){
	$rootScope.rotTest = "this is root avirable"
	this.test = "jingduo"
	$scope.alertfn = function(){
		console.log('this is the parent function')
	}
}])