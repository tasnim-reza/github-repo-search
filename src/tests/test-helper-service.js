function setUpHttpBackend(httpBackend) {
    httpBackend.whenGET("https://api.github.com/users/kibo007/repos").respond(
        [{
            "id": 26317394,
            "name": "allmighty-autocomplete",
            "html_url": "https://github.com/Kibo007/allmighty-autocomplete",
            "description": "Simple to use autocomplete directive in a module for AngularJs!"
        }]
    );
    
    httpBackend.whenGET("https://api.github.com/users/at/repos").respond(
        []
    );
}