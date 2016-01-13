/**
 * @class Angular
 * @type {module}
 * @name stuff
 * @description The stuff controller, example of a page
 * @route /stuff
 * @requires $routeProvider
 * @templateUrl app/html/stuff.html
 * @controller stuffController
 * @resolve asyncData nothing
 */

angular.module('stuff', [])
.config(function($routeProvider) {
	$routeProvider
		.when('/stuff', {
			templateUrl : 'app/html/stuff.html',
			controller  : 'stuffController',
			resolve : {
				asyncData : [function () {
				}],
			}
		})
}).
controller('stuffController', ['$scope', 'asyncData', function ($scope, asyncData) {
	/* -- Controller variables ----------------------------- */
	/* -- Scope variables ---------------------------------- */
	$scope.title = 'Stuff';
	$scope.core = $scope.$parent;
	//$scope.data = asyncData.data;
	/* -- Controller functions ----------------------------- */
	/* -- Scope functions ---------------------------------- */
	/* -- Controller run ----------------------------------- */
	/* -- Events ------------------------------------------- */
}]);