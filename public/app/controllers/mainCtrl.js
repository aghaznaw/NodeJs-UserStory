angular.module('mainCtrl', [])

.controller('MainController', function($rootScope, $location, Auth){

	var vm = this;

	vm.isLoggedIn = Auth.isLoggedIn();

	$rootScope.$on('$routeChangeStart', function(){

		vm.isLoggedIn = Auth.isLoggedIn();

		Auth.getUser().then(function(data){
			vm.user = data.data;
		})
	});


	vm.doLogin = function(){

		vm.processing = true;

		vm.error = '';

		Auth.login(vm.loginData.username, vm.loginData.password)
			.then(function(data){
				vm.processing = false;

				Auth.getUser().then(function(data){
					vm.user = data.data;

				});

				if(data.success){

					$location.path('/');
				}else{

					vm.error = data.message;
				}

			})
	}


	vm.logout = function(){

		Auth.logout();
		$location.path('/logout');
	}

});
