/**
 * @class Angular
 * @type {directive}
 * @name svgObject
 * @description A directive that display a svg object given an url
 * @restrict {E}
 * @templateUrl app/js/directives/templates/svgObject.html
 * @param {String} src Link to the .svg to be displayed
 * @param {String} color Predominant color to be applied to the svg
 * @param {String} id The id to be assigned to the svg holder
 */

angular.module('directives')
.directive('svgObject', function () {
	return {
		restrict : 'E',
		templateUrl : 'app/js/directives/templates/svgObject.html',
		scope : {
			src : '@',
			color : '@',
			id : '@'
		},
		link : function ($scope, $element) {
			$.get($scope.src, function(svg){
				window.svg = $scope.svgobj = svg.match(/<svg[\s\S]*svg>/g)[0];
				$scope.$apply();
			}, 'text');
		}
	}
})