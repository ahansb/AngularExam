(function () {
    'use strict';

    function ProjectDetailsController($routeParams,identity) {
        var vm = this;
        var id = $routeParams.id; // $routeParams['id']

        if (!identity.isAuthenticated()) {
            $location.path('/unauthorized');
        }


        projects.getProjectById(id)
            .then(function (publicProjects) {
                vm.projects = publicProjects;
            });

    }

    angular.module('myApp.controllers')
        .controller('ProjectDetailsController', ['$routeParams','ídentity', ProjectDetailsController])
}());