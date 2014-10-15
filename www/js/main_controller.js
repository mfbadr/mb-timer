(function(){
  'use strict';

  angular.module('mb-timer')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.title = 'mb-timer';
    $scope.time = 1;
    $scope.timeLeft = 1;
    $scope.minutes = 0;
    var runTimer;

    $scope.addMinutes = function(timeAdded){
      timeAdded = parseInt(timeAdded);
      $scope.time += timeAdded * 60;
      $scope.minutes = Math.floor($scope.time / 60);
    };
    $scope.addSeconds = function(timeAdded){
      timeAdded = parseInt(timeAdded);
      $scope.time += timeAdded;
      $scope.minutes = Math.floor($scope.time / 60);
    };

    $scope.startTimer = function(){
      $scope.timerDone = null;
      $interval.cancel(runTimer);
      $scope.time = parseInt($scope.time);
      $scope.timeLeft = $scope.time;

      runTimer = $interval(function(){
        $scope.timeLeft --;

        //cancel timer when time reaches zero
        if($scope.timeLeft === 0){
          $scope.timerDone = true;
          $interval.cancel(runTimer);
        }
      }, 1000);
    };

    $scope.clearTime = function(){
      $scope.time = 1;
      $interval.cancel(runTimer);
      $scope.timeLeft = 1;
      $scope.timerDone = null;
      $scope.minutes = 0;
    };

    $scope.minutesLeft = function(timeLeft){
      return Math.floor(timeLeft / 60);
    };

  }]);
})();
