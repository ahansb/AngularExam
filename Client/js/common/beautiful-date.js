(function () {
    'use strict';

    function beautifulDate() {
        return function (input) {
            // check if input is date

            var monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];

            var date = new Date(input);
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            var hours = date.getHours();
            var minutes = date.getMinutes();

            if (minutes < 10) {
                minutes = '0' + date.getMinutes();
            }

            var secondes = date.getSeconds();
            // get time

            return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hours + ':' + minutes + ':' + secondes;
        }
    }

    angular.module('myApp.filters')
        .filter('beautifulDate', [beautifulDate])
}());