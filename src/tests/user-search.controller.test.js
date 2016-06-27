//set angular constant model
angular
	.module('app.githubUserSearch')
	.constant('userApiEndpoint', 'https://api.github.com/users')
	.constant('errorMessages', {
		userEmptyRepo: 'User: \'{0}\' doesn’t have any public repositories yet.'
	});

//test spec details
describe('UserSearchController', function () {

	beforeEach(module('app.githubUserSearch'));

	var $controller, httpBackend;

	beforeEach(inject(function (_$controller_, _$httpBackend_) {
		$controller = _$controller_;
		httpBackend = _$httpBackend_;
	}));

	describe('onSearch', function () {
		it('should return some github user repos', function () {			
			setUpHttpBackend(httpBackend);
			var $scope = {};
			var controller = $controller('UserSearchController as vm', { $scope: $scope });
			$scope.vm.searchText = 'kibo007'
			$scope.vm.onSearch();
			httpBackend.flush();
			expect($scope.vm.userRepositories.length).toBe(1);
		})
	}); 
	
	describe('onSearch', function () {
		it('user does not have any repo', function () {			
			setUpHttpBackend(httpBackend);
			var $scope = {};
			var controller = $controller('UserSearchController as vm', { $scope: $scope });
			$scope.vm.searchText = 'at'
			$scope.vm.onSearch();
			httpBackend.flush();
			
			expect($scope.vm.userRepositories.length).toBe(0);
			expect($scope.vm.notificationMessage).toBe('User: \'at\' doesn’t have any public repositories yet.');
		})
	});
});