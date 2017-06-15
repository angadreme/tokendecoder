var tokentester;
(function (tokentester) {
    angular.module('tokentester', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-jwt']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: tokentester.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: tokentester.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(tokentester || (tokentester = {}));
