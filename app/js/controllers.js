'use strict'

var bookcatControllers = angular.module('bookcatControllers' , []);

bookcatControllers.controller('BookListCtrl', ['$scope', 'Book',
	function($scope, Book) {
		$scope.books = Book.query();
	}]);
