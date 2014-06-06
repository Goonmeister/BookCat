'use strict'

var bookcatControllers = angular.module('bookcatControllers' , []);

bookcatControllers.controller('BookListCtrl', ['$scope', 'Book',
	function($scope, Book) {
		$scope.books = Book.query();
	}]);

bookcatControllers.controller('BookDetailCtrl', ['$scope', '$routeParams', 'Book',
  function($scope, $routeParams, Book) {
    $scope.book = Book.get({bookId: $routeParams.bookId}, function(book) {
      $scope.mainImageUrl = "";
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);