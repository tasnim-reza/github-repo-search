(function () {
    'use strict';

    angular
        .module('app.githubUserSearch')
        .controller('UserSearchController', UserSearchController);

    UserSearchController.$inject = ['$scope', 'userSearchService', 'userApiEndpoint', '$rootScope', 'errorMessages'];

    function UserSearchController($scope, userSearchService, userApiEndpoint, $rootScope, errorMessages) {
        var vm = this, 
            previousSearchText = '';

        vm.title = 'Repository Search';

        //vm.searchText = 'kibo007';

        vm.onSearch = function () {
            if(!needToSearch()) return;
            
            clearModel();
            $rootScope.hasBusyScreen = true;
            userSearchService.getUserRepos(vm.searchText)
                .then(handleResponse)
                .catch(showError)
        };

        function handleResponse(response) {
            $rootScope.hasBusyScreen = false;
            vm.userRepositories = response;
            if(vm.userRepositories.length === 0)
                vm.notificationMessage = errorMessages.userEmptyRepo.replace('{0}', vm.searchText)
        }

        function showError(error) {
            $rootScope.hasBusyScreen = false;
            if (error.status === 404) {
                vm.errorMessage = errorMessages.status404;                
            }
            else if(error.status === 408){
                vm.errorMessage = errorMessages.status408;
            }
            else{
                vm.errorMessage = errorMessages.general;
            }
            console.log(error);
        }

        function clearModel() {            
            vm.errorMessage = '';
            vm.notificationMessage = '';
            vm.userRepositories = [];
        }
        
        function needToSearch(){
            if(previousSearchText === vm.searchText)
                return false;
            else{
                previousSearchText = vm.searchText;
                return true;
            }
        }
    }
})();
