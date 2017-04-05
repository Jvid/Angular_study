angular.module("docsTabsExample",[])
.directive('myTabs',function(){
	return {
		restrict:'E',
		transclude:true,
		scope:{},
		controller:function($scope){
			var panes = $scope.panes = [];

			$scope.select = function(pane){
				angular.forEach(panes,function(pane){
					pane.selected = false;
				});
				pane.selected = true;
			}

			this.addPane = function(pane){
				if(panes.length == 0){
					$scope.select(pane);
				}
				panes.push(pane)
			}
			// $scope.i = 0;
		},
		templateUrl:'my-tabs.html'
	}
})
.directive('myPane',function(){
	return {
		require:'^myTabs',
		restrict:'E',
		transclude:true,
		scope:{
			title:'@'
		},
		link:function(scope,element,attrs,tabsCtrl){
			console.log(scope);
			scope.i = 0;
			tabsCtrl.addPane(scope);
		},
		templateUrl:'my-pane.html'
	}
})