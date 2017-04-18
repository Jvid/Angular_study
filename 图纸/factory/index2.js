angular.module("myApp",[])
.factory('addFactory', ['$http', function($http){
	var message = {};
	message.list = [];
	message.addText = function(str){
		message.list.push({id:message.list.length,content:str})
	}
	return message;
}])
.controller('myCtrl', ['$scope','addFactory', function($scope,a){
	var self = this;
	self.messages = a.list;
}])
.controller('addCtrl', ['$scope','addFactory', function($scope,a){
	var self = this;
	self.message = '';
	self.addmessage = function(str){
		a.addText(str);
		self.message = '';
	}
}])