window.Blog = angular.module('Blog', ['ui.router'])
    // .run(function($location, Restangular, AuthService) {
    //     Restangular.setFullRequestInterceptor(function(element, operation, route, url, headers, params, httpConfig) {
    //     headers['Authorization'] = 'Basic ' + AuthService.getToken();
    //     return {
    //         headers: headers
    //         };
    //     });
    //     Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
    //         if (response.config.bypassErrorInterceptor) {
    //             return true;
    //         } else {
    //             switch (response.status) {
    //             case 401:
    //                 AuthService.logout();
    //                 $location.path('/sessions/create');
    //                 break;
    //             default:
    //                 throw new Error('No handler for status code ' + response.status);
    //             }
    //             return false;
    //         }
    //     });
    // })

    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home/detail.html'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'partials/about/about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'Look I am a column!' },

            // for column two, we'll define a separate controller 
            'columnTwo@about': { 
                templateUrl: 'partials/about/table-data.html',
                controller: 'scotchController'
            }
        }    
        });    
    });
    // .config(function($routeProvider, RestangularProvider) {
    // RestangularProvider.setBaseUrl('http://localhost:5000/api/v1');
    // var partialsDir = '../partials';
    // var redirectIfAuthenticated = function(route) {
    // return function($location, $q, AuthService) {
    // var deferred = $q.defer();
    // if (AuthService.isAuthenticated()) {
    // deferred.reject()
    // $location.path(route);
    // } else {
    // deferred.resolve()
    // }
    // return deferred.promise;
    // }
    // }
    // var redirectIfNotAuthenticated = function(route) {
    // return function($location, $q, AuthService) {
    // var deferred = $q.defer();
    // if (! AuthService.isAuthenticated()) {
    // deferred.reject()
    // $location.path(route);
    // } else {
    // deferred.resolve()
    // }
    // return deferred.promise;
    // }
    // }
    // $routeProvider
    // .when('/', {
    // controller: 'HomeDetailCtrl',
    // templateUrl: partialsDir + '/home/detail.html'
    // })
    // .when('/sessions/create', {
    // controller: 'SessionCreateCtrl',
    // templateUrl: partialsDir + '/session/create.html',
    // resolve: {
    // redirectIfAuthenticated: redirectIfAuthenticated('/posts/create')
    // }
    // })
    // .when('/sessions/destroy', {
    // controller: 'SessionDestroyCtrl',
    // templateUrl: partialsDir + '/session/destroy.html'
    // })
    // .when('/users/create', {
    // controller: 'UserCreateCtrl',
    // templateUrl: partialsDir + '/user/create.html'
    // })
    // .when('/posts/create', {
    // controller: 'PostCreateCtrl',
    // templateUrl: partialsDir + '/post/create.html',
    // resolve: {
    // redirectIfNotAuthenticated: redirectIfNotAuthenticated('/sessions/create')
    // }
    // });
    // })