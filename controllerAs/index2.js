angular.module("myApp",[])
.controller('myCtrl', ['$scope', function($scope){
	var self = this;
	self.msg = "jvid";
	$scope.$on('ms',function(event,data){
		self.msgc = data;
	})
}])
.controller('childCtrl', ['$scope', function($scope){
	var self = this;
	self.msg = "duo";
	self.emitFn = function(str){
		$scope.$emit('ms',str)
	}
}])