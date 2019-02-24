angular.module("meuModulo")
.controller("adminController",function($scope){
	$scope.titulo = "Admin";
	$scope.produtos = [
		{nome: "Leite",fabricante:"Tirol",custo:65,venda:80,quantidade:55},
		{nome: "Nescau",fabricante:"Nestlé",custo:75,venda:80,quantidade:55},
		{nome: "Arroz",fabricante:"Tio João",custo:65,venda:60,quantidade:55},
		{nome: "Feijão",fabricante:"Tio João",custo:95,venda:80,quantidade:55},
		{nome: "Farinha",fabricante:"Roça seca",custo:65,venda:30,quantidade:55}
	];

	var init = function(){
		$scope.produtos.forEach(function(produto){
			produto.media = media(produto);
		});
		limpaForm();
	};

	var media = function(Produto){		
		var media = (parseFloat(Produto.custo) + parseFloat(Produto.venda) + parseFloat(Produto.quantidade))/3;
		return media.toFixed(2);
	};

	$scope.abreAddProduto = function(){
		$scope.editando = false;
		limpaForm();
		$('#modal1').openModal();
	};

	$scope.addProduto = function(Produto){
		Produto.media = media(Produto);
		$scope.produtos.push(Produto);
		$('#modal1').closeModal();
		limpaForm();
	};

	$scope.editando = false;
	var produtoEditar;

	$scope.editarProduto = function(Produto){
		$scope.editando = true;			
		angular.copy(Produto,$scope.Produto);
		$('#modal1').openModal();
		produtoEditar = Produto;
	};

	$scope.salvarProduto = function(Produto){
		produtoEditar.nome = Produto.nome;
		produtoEditar.fabricante = Produto.fabricante;
		produtoEditar.custo = Produto.custo;
		produtoEditar.venda = Produto.venda;
		produtoEditar.quantidade = Produto.quantidade;
		produtoEditar.media = media(Produto);
		$('#modal1').closeModal();
	};

	$scope.deletarProduto = function(Produto){
		for(var index in $scope.produtos){
			var aux = $scope.produtos[index];
			if(Produto === aux){
				$scope.produtos.splice(index,1);
			}
		}
	};

	var limpaForm = function(){
		$scope.Produto = {nome: "",fabricante:"",custo:'',venda:'',quantidade:'',media:''};
	};
})