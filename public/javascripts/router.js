
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/agency', {
        templateUrl: '/agency.ejs',
        controller: 'mainController'
    }).when('/sign-in', {
        templateUrl: '/sign-in.ejs',
        controller: 'mainController'
    }).when('/sign-up', {
        templateUrl: '/sign-up.ejs',
        controller: 'mainController'
    }).otherwise({
        redirectTo: '/agency'
    })
}]);