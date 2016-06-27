(function () {
    'use strict';

    angular
        .module('app.core')
        .config(routeConfig);
    
    routeConfig.$inject = ['$routeProvider']
    
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home'
            })
            .when('/home', {
                //template:'<h1>Hello</h1>'
                templateUrl: 'app/layout/shell.html',
                // controller: 'BookController',
                // resolve: {
                //     // I will cause a 1 second delay
                //     delay: function ($q, $timeout) {
                //         var delay = $q.defer();
                //         $timeout(delay.resolve, 1000);
                //         return delay.promise;
                //     }
                // }
            })
            .when('/github-user-search', {
                templateUrl: 'app/github-user-search/user-search.html',
                controller: 'UserSearchController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
    }    
})();