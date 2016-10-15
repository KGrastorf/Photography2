angular.module("photoApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/templates/home.html",
                templateUrl: "./templates/home.html"
            })
            .state("yellowstone", {
                url: "/templates/yellowstone.html",
                templateUrl: "./templates/yellowstone.html",
            })
            .state("headshots", {
                url: "/templates/headshots.html",
                templateUrl: "./templates/headshots.html"
            })
            .state("misc", {
                url: "/templates/misc.html",
                templateUrl: "./templates/misc.html"
            });


        $urlRouterProvider.otherwise('/templates/home.html');

    });

  
