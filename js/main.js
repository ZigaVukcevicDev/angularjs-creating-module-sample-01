angular.module('demo', []);

angular.module('demo').controller('DemoController', function($scope) {
    $scope.tasks = [];
    console.log($scope.tasks);
    
    $scope.add = function(task) {
        $scope.tasks.push(task);
        console.log('array: ' + $scope.tasks);
    }
});