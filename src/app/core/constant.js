(function () {
    'use strict';
    
    angular
    .module('app.core')
    .constant('userApiEndpoint', 'https://api.github.com/users')
    .constant('errorMessages', {
        status404: 'An error has occured, The user doesn\'t exist!.',
        status408: 'An error has occured, Request timed out.',
        general: 'An error has occured.',
        userEmptyRepo: 'User: \'{0}\' doesn’t have any public repositories yet.'
    });
})();   