(function () {
    'use strict';

    angular
        .module('app.githubUserSearch')
        .service('userSearchService', UserSearchService);

    UserSearchService.$inject = ['$http', 'userApiEndpoint'];

    function UserSearchService($http, userApiEndpoint) {
        this.getUserRepos = function (userName) {
            var url = userApiEndpoint + '/' + userName + '/repos';

            return $http
                .get(url)
                .then(function (response) {
                    //console.log(response)
                    return response.data.map(toViewModel);
                });
        }

        function toViewModel(item) {
            return {
                name: item.name,
                url: item.html_url,
                description: item.description
            };
        }
    }
})();
