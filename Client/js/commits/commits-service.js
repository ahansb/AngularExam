(function () {
    'use strict';

    function commits(data) {
        function getPublicCommits() {
            return data.get('api/commits');
        }

        return {
            getPublicCommits: getPublicCommits
        }
    }

    angular.module('myApp.services')
        .factory('commits', ['data', commits])
}());