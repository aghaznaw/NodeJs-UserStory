angular.module("userCtrl", ['userService'])

.controller("UserController", function(User){
    var vm = this;

    User.all().then(function onSuccess(response){
       vm.users = response.data;
    })
})

.controller("UserCreateController", function(User, $location, $window){

  var vm = this;

  vm.signupUser = function(){

    vm.message = '';
      
    User.create(vm.userData).then(function onSuccess(response){

      vm.message = response.data.message;
      vm.userData = {};
      $window.localStorage.setItem('token', response.data.token);
      $location.path('/');
    })
  }

})
