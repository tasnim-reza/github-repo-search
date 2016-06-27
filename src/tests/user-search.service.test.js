angular
    .module('app.githubUserSearch')
    .constant('userApiEndpoint', 'https://api.github.com/users');

describe('UserSearchService', function () {

    beforeEach(module('app.githubUserSearch'));

    var userSearchService, httpBackend, $rootScope;

    beforeEach(inject(function (_userSearchService_, _$httpBackend_, _$rootScope_) {
        userSearchService = _userSearchService_;
        httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
    }));

    describe('getUsers', function () {
        it('should retrieve some user repo', function () {
            setUpHttpBackend(httpBackend);            
            var userName = 'kibo007';

            userSearchService.getUserRepos(userName).then(function (respone) {
                expect(respone[0].name).toEqual('allmighty-autocomplete');
            });

            httpBackend.flush();

            //$rootScope.$digest();
        });
    });

});