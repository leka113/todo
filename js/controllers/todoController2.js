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
  $scope.showToast = function(message) {
    $mdToast.show(
      $mdToast.simple()
        .content(message)
        .position('top right')
        .hideDelay(1500)
    );
  };

  $scope.todos = [{text:'Learn AngularJS', detail:'Make 1 course a day', done:false, bin:'todo',index:'1', id:'todo1'},{text:'Build an App',detail:'Try to build several apps in Angular JS', done:false, bin:'todo',index:'2', id:'todo2'},{text:'Learn CSS', detail:'Make 1 course a day', done:false, bin:'ongoing',index:'1', id:'ongoing1'},{text:'Meet Applidiums CEO', detail:'Make 1 course a day', done:false, bin:'done',index:'1', id:'done1'}]
  $scope.addTodo = function () {
    var index = $scope.todos.length+1;
    var id = 'todo'+index;
    $scope.todos.push({text:$scope.formTodoText,detail:$scope.formTodoDetail, done:false, bin:'todo', index:index, id:id});
    $scope.formTodoText = '';
    $scope.formTodoDetail = '';
  }
  $scope.todoOngoing = [{text:'Learn HTML/CSS', detail:'Make 1 course a day', done:true, bin:'ongoing', index:'1', id:'ongoing1'},{text:'DragnDrop',detail:'Try to build several apps in Angular JS', done:false, bin:'ongoing', index:'2', id:'ongoing2'}]
  $scope.todoDone = [{text:'Learn HTML/CSS', detail:'Make 1 course a day', done:true, bin:'done', index:'1', id:'done1'},{text:'DragnDrop',detail:'Try to build several apps in Angular JS', done:false, bin:'done', index:'2', id:'done2'}]

  $scope.getLength = function() {
    var result = 0;
    for (var i=0;i<$scope.todos.length;i++) {
      if ($scope.todos[i].bin==='todo' || $scope.todos[i].bin==='ongoing' )
        result++;
        else {

        }
    }
    return result;

  }

  $scope.clearCompleted = function () {
    $scope.todos = $scope.todos.filter(function(todo){
      if (todo.bin==='done')
        return false ;
        else {
          return true;
        }
    });
    $scope.showToastClear();
  };

  $scope.removeTodo = function (list, todo) {
    list = list.filter(isIDFound)
  };

  $scope.isIdFound = function (item) {
    alert('item.id='+item.id.valueOf()+' & this='+this.value());
    return item.id.valueOf() === this.valueOf();
  }

// Function whichListFromTodo : returns the type of list (todo, ongoing or done) from an itemID
  $scope.whichListFromTodo = function (itemID) {
        if (itemID.indexOf("ongoing") > -1) {
          return "ongoing";
        }
        else if (itemID.indexOf("done") > -1) {
          return "done";
        }
        else if (itemID.indexOf("todo") > -1) {
          return "todo";
        }
        else { return "not found";}
  }

// Function findTodoByID : returns the todo associated to the todoID
  $scope.findTodoByID = function (todoID) {
    //alert('todo='+todoID.id.valueOf()+' & this='+this.valueOf());
    return todoID.id.valueOf()===this.valueOf();
  }

// Function removeTodo : removes a todo from a list
  $scope.removeTodo = function (list, todo) {
    var index = list.indexOf(todo);
    //alert('indexOf '+todo.id+' is '+index);
    if (index > -1) {
      //alert('Length before splice='+list.length);
      list.splice(index,1);
      //alert('Length after splice='+list.length);
    }
  }

// Function moveTodo : moves an item from originTodo to destinationTodo
  $scope.moveTodo = function (destinationTodo, item) {
    //alert('Im in movetodo()');
    //alert('Old destinationTodo.length='+destinationTodo.length);
    //destinationTodo.push(item);
    //alert('New destinationTodo.length='+destinationTodo.length);
    //alert('Old originTodo.length='+originTodo.length);
    //$scope.removeTodo(originTodo,item);
    //originTodo.filter($scope.isIdFound,item.id);
    //alert('New originTodo.length='+originTodo.length);
    item.bin = destinationTodo.valueOf() ;
  }

  $scope.checkBin = function (todo, bin) {
    return todo.bin.valueOf() === bin.valueOf();
  }

// What happens when you drop?
// itemID=id of the HTML element that has been dropped
// bin=destination bin id
  $scope.handleDrop = function(itemID, bin) {
    //var listType = $scope.whichListFromTodo(itemID);
    //var todo = $scope.todoOngoing.find($scope.findTodoByID,itemID);
    var todo = $scope.todos.find($scope.findTodoByID,itemID);
    //alert('Todo with ID '+todo.id+' has moved from '+listType+' to '+bin);
    if (bin=="binTodo") {
      $scope.moveTodo("todo",todo);
      //alert("todo.bin="+todo.bin);
      //$scope.removeTodo(todoOngoing,todoOngoing.find(checkBinOngoing, this));
      //alert('Item ' + itemID +' has been dropped from ' + listType + ' into Todo');
    }
    else if (bin=="binOngoing") {
      $scope.moveTodo("ongoing",todo);
      //alert("todo.bin="+todo.bin);

    }
    else if (bin=="binDone") {
      $scope.moveTodo("done",todo);
      //alert("todo.bin="+todo.bin);
    }

  }
})
