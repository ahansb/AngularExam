(function () {
    'use strict';

    function CreateProjectController($location,identity, licenses, projects) {
        var vm = this;

        if (!identity.isAuthenticated()) {
            $location.path('/unauthorized');
        }

        licenses.getAll()
            .then(function (allLicenses) {
                vm.licenses = allLicenses;
            });

        vm.createProject = function (newProject) {
            projects.createProject(newProject)
                .then(function (createdProject) {
                    $location.path('/projects');
                });
        }
    }

    angular.module('myApp.controllers')
        .controller('CreateProjectController', ['$location','identity', 'licenses', 'projects', CreateProjectController]);
}());