angular.module("myApp",[])
.value('domain', 'tiger')
.service('firstService',['domain',function(domain){
	this.al = function(){
		alert('这是service方法')
	}
	this.t = function(){
		alert(domain)
	}	
}])
.controller('myCtrl', ['$scope','firstService', function($scope,firstService){
	$scope.btn1 = firstService.al;
	$scope.btn2 = firstService.t;
}])