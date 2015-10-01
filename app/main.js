require.config({
    baseUrl: 'app'
});

require(
    [
        'app',
        'routeResolver',
        'components/login/loginService',
        'appController',
        'components/login/loginController',
        'shared/directives/expressionGrid/expressionGrid',
        'components/home/homeService',
        'shared/filters/maskingOptions',
        'shared/todoStorage/storeService'
    ],
    function () {
        angular.bootstrap(document, ['dgSecureApp']);
    });
