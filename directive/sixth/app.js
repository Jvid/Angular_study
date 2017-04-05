angular.module('myApp', [])
  .controller('myCtrl', function($scope) {
    $scope.format = 'M/d/yy h:mm:ss a';
  })
  .directive('myCurrentTime', function($timeout, dateFilter) {

    function link(scope, element, attrs) {
      var format,
          timeoId;

      function updateTime() {
        element.text(dateFilter(new Date(), format));
      }

      scope.$watch(attrs.myCurrentTime, function(value) {
        format = value;
        updateTime();
      });

      function scheduleUpdate() {
        // save the timeoutId for canceling
        timeoutId = $timeout(function() {
          updateTime(); // update DOM
          scheduleUpdate(); // schedule the next update
        }, 1000);
      }

      element.on('$destroy', function() {
        $timeout.cancel(timeoutId);
      });

      // start the UI update process.
      scheduleUpdate();
    }

    return {
      link: link
    };
  });