angular.module("myApp",[])
.directive('welcome',function(){
	return {
		restrict:'E',
		template:'<H1>Hello Jvid</h1>',
		link:function(){
			console.log(arguments);
			alert('Hello Jvid');
		}
	}
})
.controller('myCtrl', ['$scope', function($scope){
	var self = this;
}])