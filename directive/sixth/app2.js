angular.module("myApp",[])
.controller('myCtrl', ['$scope', function($scope){
	$scope.format = "yyyy-MM-dd h:mm:ss a";
}])
.directive('currentTime',function($timeout,dateFilter){
	function link(scope,element,attrs){
		var format,timeoutId;
		scope.$watch(attrs.currentTime,function(value){
			format = value;
			upDateTime();
		})
		function upDateTime(){
			element.text(dateFilter(new Date(),format));
		}
		function newDateTime(){
			timeoutId = $timeout(function(){
				upDateTime();
				newDateTime();
			},1000)
		}
		element.on('$destroy', function() {
	        $timeout.cancel(timeoutId);
	     });
		newDateTime();
	}
	return {
		link : link
	}
})