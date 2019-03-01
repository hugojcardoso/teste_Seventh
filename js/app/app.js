angular.module("meuModulo",['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when("/home",{
		templateUrl:"templates/home.html",
		controller:"indexController"
	})
	.when("/cesta",{
		templateUrl:"templates/cesta.html",
		controller:"cestaController"
	})
	.when("/admin",{
		templateUrl:"templates/admin.html",
		controller:"adminController"
	});

	$routeProvider.otherwise({redirectTo:"/home"});

})