angular.module('MyApp', ['appRoutes', 'authService', 'mainCtrl', 'userService', 'userCtrl'])

.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
})
