angular.module( 'myApp', [ 'ngMaterial', 'ngMessages' ] )
      .controller("MainController", ['$scope', function($scope, $mdToast, $mdDialog, $animate) { 
  $scope.todos = [{text:'Learn AngularJS', detail:'Make 1 course a day', done:false},{text:'Build an App',detail:'Try to build several apps in Angular JS', done:false}]
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText,detail:$scope.formTodoDetail, done:false});
    $scope.formTodoText = '';
    $scope.formTodoDetail = '';
  }
  
  $scope.clearCompleted = function () {
    $scope.todos = $scope.todos.filter(function(todo){
    return !todo.done
    });
  };
  
  $scope.openToast = function($event) {
    $mdToast.show($mdToast.simple().textContent('Hello!'));
    // Could also do $mdToast.showSimple('Hello');
  };
  
  
}]);
