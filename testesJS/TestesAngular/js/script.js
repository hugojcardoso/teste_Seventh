var app = angular.module("myApp",[]);

app.controller("productController", function($scope, $http){
    $http.get('https://s-shop-test.herokuapp.com/product').then(function (response) {
        $scope.products = response.data;
        console.log(products);
    }).error(function(data, status, headers, config){

    });
});