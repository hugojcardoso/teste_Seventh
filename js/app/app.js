angular.module("meuModulo",['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when("/home",{
		templateUrl:"templates/home.html",
		controller:"indexController"
	})
	.when("/carrinho",{
		templateUrl:"templates/carrinho.html",
		controller:"carrinhoController"
	})
	.when("/admin",{
		templateUrl:"templates/admin.html",
		controller:"adminController"
	});

	$routeProvider.otherwise({redirectTo:"/home"});

})