var app = angular.module('app', ['ngMaterial']);

app.controller('MainController', function($attrs, $scope, $mdToast, $mdDialog, $animate) {
  $scope.toastPosition = {
    bottom: false,
    top: true,
    left: true,
    right: false
  };

  $scope.getToastPosition = function() {
    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };
  $scope.showToastClear = function() {
    $mdToast.show(
      $mdToast.simple()
        .content('Cleared all completed tasks !')
        .position('top right')
        .hideDelay(1500)
    );
  };
  
  $scope.todos = [{text:'Learn AngularJS', detail:'Make 1 course a day', done:false, bin:'todo',index:'1'},{text:'Build an App',detail:'Try to build several apps in Angular JS', done:false, bin:'todo',index:'2'}]
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText,detail:$scope.formTodoDetail, done:false, bin:'todo', index:$scope.todos.length+1});
    $scope.formTodoText = '';
    $scope.formTodoDetail = '';
  }
  $scope.todoOngoing = [{text:'Learn HTML/CSS', detail:'Make 1 course a day', done:true, bin:'ongoing', index:'1'},{text:'DragnDrop',detail:'Try to build several apps in Angular JS', done:false, bin:'ongoing', index:'2'}]

  
  $scope.clearCompleted = function () {
    $scope.todos = $scope.todos.filter(function(todo){
        return !todo.done
    });
    $scope.showToastClear();
  };
  
  $scope.handleDrop = function(item, bin) {
    
    if (bin=="binTodo") {
      alert('Item ' + item +' has been dropped into Todo '+$scope.bin);
    }
    else if (bin=="binOngoing") {
      alert('Item ' + item + ' has been dropped into Ongoing');
    }
  }
})
