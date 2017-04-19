(function (window) {
	angular.module("myApp",[])
	.directive('tab',function(){
		return {
			require:'tabset',
			restrict:'E',
			transclude:true,
			template:'<h2>Hello World!</h2><div role="tabpanel" ng-transclude></div>',
			scope:{},
			link:function(scope,elem,attr,tabsetCtrl){
				tabsetCtrl.tabset.addTab(scope)
			}
		}
	})
	.directive('tabset',function(){
		return {
			restrict:'E',
			transclude:true,
			scope:{},
			templateUrl:'tabset.html',
			bindToController:true,
			controllerAs:'tabset',
			controller:function(){
				var self = this;
				self.tabs = [];
				self.addTab = function addTab(tab){
					self.tabs.push(tab)
				}
			}
		}
	})
})(window)