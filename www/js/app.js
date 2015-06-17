
var talant = angular.module('starter', ['ionic'])

.run(function($ionicPlatform, localStorage, $state) {
	$ionicPlatform.ready(function() {

		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}

		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});

    // var settings = localStorage.getObject('settingsTalant'),
    //     maurisAccount = localStorage.getObject('talantAccount');

    // if (!settings) {
    //     var newSettings = {};
    //     localStorage.setObject('settingsTalant', newSettings);
    // } 

    // if (!talantAccount) {
    //     $state.go('signup');
    // } else {
    //     $state.go('eventmenu.profile');
    // }
})

.config(function($stateProvider,$urlRouterProvider) {
	$stateProvider

	.state('eventmenu', {
		url: "/event",
		abstract: true,
		templateUrl: "templates/event-menu.html"
	})

	.state('signup', {
		url: "/signup",
		templateUrl: "templates/sign-up.html",
		controller: "SignUpCtrl"
	})

	.state('eventmenu.profile', {
		url: "/profile",
		views: {
			'menuContent': {
				templateUrl: "templates/profile.html",
				controller: "profileCtrl"
			}
		}
	})

	.state('eventmenu.find-talent', {
		url: "/find-talent",
		views: {
			'menuContent': {
			templateUrl: "templates/find-talent.html",
			controller: "FindTalentCtrl"
			}
		}
	})

	.state('eventmenu.friends', {
	url: "/friends",
		views: {
			'menuContent': {
			templateUrl: "templates/friends.html",
			}
		}
	})

	.state('eventmenu.messanger', {
		url: "/messanger",
		views: {
			'menuContent': {
			templateUrl: "templates/messanger.html",
			controller: "MessangerCtrl"
			}
		}
	})

	.state('eventmenu.chat', {
		url: "/chat",
		views: {
			'menuContent': {
			templateUrl: "templates/chat.html",
			controller: "ChatCtrl"
			}
		}
	})

	.state('eventmenu.photo', {
		url: "/photo",
		views: {
			'menuContent': {
			templateUrl: "/templates/photo.html",
			}
		}
	})

	.state('eventmenu.about', {
		url: "/about",
		views: {
			'menuContent': {
			templateUrl: "/templates/about.html",
			}
		}
	})

	$urlRouterProvider.otherwise("/event/profile");
})