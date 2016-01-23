var app =  angular.module('agencyApp',['ngRoute'])
.controller('mainController', function($scope,$http){
    $scope.user = {
        username: null,
        password: null
    }
    
    $scope.userRegister = function(){
        $scope.user = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }
        $http.post("/users/signup", $scope.user)
            .success(function (result) {
                console.log(result.success);
            }).error(function (err) {
                console.log(result.success);
                console.log('error => ' + err);

        });
    }
    $scope.userLogin = function(){
        $scope.user = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }
        $http.post("/users/signin", $scope.user)
            .success(function (result) {
                console.log(result.success);
            }).error(function (err) {
                console.log(result.success);
                console.log('error => ' + err);

        });
    }
});