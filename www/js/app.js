
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

.config(function($stateProvider,$urlRouterProvider,$ionicAppProvider) {

  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: '9262b2a5',
    // The public API key all services will use for this app
    api_key: 'fbd5d43842d8e7c51fc61bb4c3c9ac4179d74368a83afa79',
    // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
    // gcm_id: 'YOUR_GCM_ID'
  });
	
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
				controller: "ProfileCtrl"
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
			controller: "FriendsCtrl"
			}
		}
	})

	.state('eventmenu.member', {
		url: "/member/:memberId",
		views: {
			'menuContent': {
				templateUrl: "templates/member.html",
				controller: "MembersCtrl"
			}
		}
	})

	.state('eventmenu.messenger', {
		url: "/messenger",
		views: {
			'menuContent': {
			templateUrl: "templates/messenger.html",
			controller: "MessengerCtrl"
			}
		}
	})

	.state('eventmenu.chat', {
		url: "/chat/:chatId",
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
			controller: "PhotosCtrl"
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