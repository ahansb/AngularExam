(function(){
    'use strict';

    function projects(data,id) {
        var PROJECTS_URL = 'api/projects';

        function getPublicProjects() {
            return data.get(PROJECTS_URL);
        }

        function filterProjects(filters) {
            return data.get(PROJECTS_URL+'/all', filters);
        }

        function createProject(project) {
            return data.post(PROJECTS_URL, project);
        }

        function  getProjectById(){
            return data.get(PROJECTS_URL+'/'+ id);
        }

        return {
            getPublicProjects: getPublicProjects,
            createProject: createProject,
            filterProjects: filterProjects,
            getProjectById : getProjectById
        }
    }

    angular.module('myApp.services')
        .factory('projects', ['data', projects])
}());