angular.module("meuModulo")
.controller("indexController",function($scope){
	$scope.titulo = "Home";
	


})
.controller("cestaController",function($scope, $http){
	$scope.titulo = "Cesta";

	$http.get('https://s-shop-test.herokuapp.com/order').success(function(data, status, headers, config){
		console.log(data);
		$scope.orders = data;
		
	}).error(function(data, status, headers,config){

	});
})

.controller("adminController",function($scope, $http){
	$scope.titulo = "Admin";
	
	$http.get('https://s-shop-test.herokuapp.com/product').success(function(data, status, headers, config){
		
		$scope.products = data;
		
	}).error(function(data, status, headers,config){

	});

	// var init = function(){
	// 	$scope.produtos.forEach(function(produto){
			
	// 	});
	// 	limpaForm();
	// };

	

	// $scope.abreAddProduto = function(){
	// 	$scope.editando = false;
	// 	limpaForm();
	// 	$('#modal1').openModal();
	// };

	// $scope.addProduto = function(Produto){
	// 	$scope.produtos.push(Produto);
	// 	$('#modal1').closeModal();
	// 	limpaForm();
	// };

	// $scope.editando = false;
	// var produtoEditar;

	// $scope.editarProduto = function(Produto){
	// 	$scope.editando = true;			
	// 	angular.copy(Produto,$scope.Produto);
	// 	$('#modal1').openModal();
	// 	produtoEditar = Produto;
	// };

	// $scope.salvarProduto = function(Produto){
	// 	produtoEditar.nome = Produto.nome;
	// 	produtoEditar.fabricante = Produto.fabricante;
	// 	produtoEditar.custo = Produto.custo;
	// 	produtoEditar.venda = Produto.venda;
	// 	produtoEditar.quantidade = Produto.quantidade;
	// 	$('#modal1').closeModal();
	// };

	// $scope.deletarProduto = function(Produto){
	// 	for(var index in $scope.produtos){
	// 		var aux = $scope.produtos[index];
	// 		if(Produto === aux){
	// 			$scope.produtos.splice(index,1);
	// 		}
	// 	}
	// };

	// var limpaForm = function(){
	// 	$scope.Produto = {nome: "",fabricante:"",custo:'',venda:'',quantidade:''};
	// };


	//init();
})