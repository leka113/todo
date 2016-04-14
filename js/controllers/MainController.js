angular.module( 'myApp', [ 'ngMaterial', 'ngMessages' ] )
			.controller("MainController", ['$scope', function($scope) { 
  $scope.title = 'Mentormee welcome';
  $scope.promo = 'The best platform to learn';
  $scope.plusOne = function (index) {
  $scope.products[index].likes+=1;
  };
    $scope.user = {
    name: 'John Doe',
    email: '',
    phone: '',
    address: 'Mountain View, CA',
    donation: 19.99
    };

  
}]);
