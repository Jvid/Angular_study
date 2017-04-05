angular.module('myApp', [])
  .controller('myCtrl', function($scope, $timeout) {
    $scope.name = 'Tobias';
    $scope.hdd = function () {
      $scope.hd = true;
      $timeout(function () {
        $scope.hd = false;
      }, 2000);
    };
    $scope.alertSomething = function(){
    	alert('I am a test')
    }
  })
  .directive('myDialog', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        'close': '&onClose',
        'alert':'&onAlert'
        //& 绑定了一个函数到独立作用域， 允许独立作用域调用它，同时保留了原来函数的作用域(这里的作用域都是指$scope)。 所以当一个用户点击x时候，就会运行Ctrl控制器的close函数。
      },
      templateUrl: 'tpl.html',
      link:function(scope,element){
      	scope.alertWorld = function(){
      		console.log(element)
      		alert('Hello World');
      	}
      }
    };
  });