angular.module('demo', []);

angular.module('demo').controller('DemoController', function($scope) {
    $scope.tasks = [];
    
    $scope.create = function(task) {
        $scope.tasks.push(task);
    }

    $scope.edit = function() {
        $scope.showItem = false; 
        $scope.showInput = true; 
        $scope.showEditButton = false;
        $scope.showCloseButton = true;
    }

    $scope.close = function() {
        $scope.showItem = true; 
        $scope.showInput = false; 
        $scope.showEditButton = true;
        $scope.showCloseButton = false;
    }

    $scope.remove = function(index) {
        $scope.tasks.splice(index, 1);
    }
});