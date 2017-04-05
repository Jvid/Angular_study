angular.module("myApp",[])
.directive('tab',function(){
	return {
		restrict:'E',
		transclude:true,
		scope:{},
		controller:function($scope){
			var navs = $scope.navs = [];

			$scope.select = function(nav){
				// console.log(nav)
				angular.forEach(navs,function(nav){
					nav.selected = false;
				})
				nav.selected = true;
			}

			this.addNav = function(nav){
				if(navs.length == 0){
					$scope.select(nav)
				}
				navs.push(nav)
			}
		},
		templateUrl:'tab.html'
	}
})
.directive('pan',function(){
	return {
		require:'^tab',
		restrict:'E',
		transclude:true,
		scope:{
			title:'@'
		},
		link:function(scope,element,attrs,tabCtrl){
			// console.log(arguments)
			tabCtrl.addNav(scope)
		},
		templateUrl:'pane.html'
	}
})