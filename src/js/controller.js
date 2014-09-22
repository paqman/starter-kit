/**
 * Starter Controller.
 * Required for Angularjs
 * @param {type} $scope
 * @returns {undefined}
 */

function StartCtrl($scope) {
	$scope.show = true;
	$scope.hello = "Angular is running.";

	$scope.click = function(){
		$scope.show = !$scope.show;
	}
	$scope.lodash = "lodash : KO";
	var data = [{
    c: "O",
    v: 1
}, {
    c: "l",
    v: 2
}, {
    c: "K",
    v: 1
}];
	$scope.lodash = "lodash : " + _.map(_.where(data, {
    		v: 1
		}), 'c').join("");
}
