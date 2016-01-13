/**
 * @class Angular
 * @type {module}
 * @name tags
 * @description The tags controller, example of a page
 * @route /tags
 * @requires $routeProvider
 * @templateUrl app/html/tags.html
 * @controller stuffController
 * @resolve asyncData nothing
 */

angular.module('tags', [])
.config(function($routeProvider) {
	$routeProvider
		.when('/tags', {
			templateUrl : 'app/html/tags.html',
			controller  : 'tagsController',
			resolve : {
				asyncData : [function () {
				}],
			}
		})
}).
controller('tagsController', ['$scope', 'asyncData', function ($scope, asyncData) {
	/* -- Controller variables ----------------------------- */
	/* -- Scope variables ---------------------------------- */
	$scope.title = 'Tags';
	$scope.core = $scope.$parent;
	//$scope.data = asyncData.data;
	/* -- Controller functions ----------------------------- */
	/* -- Scope functions ---------------------------------- */
	/* -- Controller run ----------------------------------- */
	/* -- Events ------------------------------------------- */
}]);