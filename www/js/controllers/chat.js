talant.controller('ChatCtrl', ['$scope', '$rootScope', '$state', '$stateParams',
                          'MockService', '$ionicActionSheet', '$ionicPopup',
                          '$ionicScrollDelegate', '$timeout', '$interval', 
    function($scope, $rootScope, $state, $stateParams, MockService,
            $ionicActionSheet,$ionicPopup, $ionicScrollDelegate,
            $timeout, $interval) {

    // mock acquiring data via $stateParams
    $scope.toUser = {
      _id: '1',
      pic: 'http://ionicframework.com/img/docs/venkman.jpg',
      username: 'Daria'
    }

    // this could be on $rootScope rather than in $stateParams
    $scope.user = {
      _id: '2',
      pic: 'http://ionicframework.com/img/docs/mcfly.jpg',
      username: 'Stanislav'
    };

    $scope.input = {
      message: localStorage['userMessage-' + $scope.toUser._id] || ''
    };

    var messageCheckTimer;

    var viewScroll = $ionicScrollDelegate.$getByHandle('userMessageScroll');
    var footerBar; // gets set in $ionicView.enter
    var scroller;
    var txtInput; // ^^^

    $scope.$on('$ionicView.enter', function() {
      // console.log('UserMessages $ionicView.enter');

      getMessages();
      
      $timeout(function() {
        footerBar = document.body.querySelector('#userMessagesView .bar-footer');
        scroller = document.body.querySelector('#userMessagesView .scroll-content');
        txtInput = angular.element(footerBar.querySelector('textarea'));
      }, 0);

      messageCheckTimer = $interval(function() {
        // here you could check for new messages if your app doesn't use push notifications or user disabled them
      }, 20000);
    });

    // $scope.$on('$ionicView.leave', function() {
    //   // console.log('leaving UserMessages view, destroying interval');
    //   // Make sure that the interval is destroyed
    //   if (angular.isDefined(messageCheckTimer)) {
    //     $interval.cancel(messageCheckTimer);
    //     messageCheckTimer = undefined;
    //   }
    // });

    // $scope.$on('$ionicView.beforeLeave', function() {
    //   if (!$scope.input.message || $scope.input.message === '') {
    //     localStorage.removeItem('userMessage-' + $scope.toUser._id);
    //   }
    // });

    function getMessages() {
      // the service is mock but you would probably pass the toUser's GUID here
      MockService.getUserMessages({
        toUserId: $scope.toUser._id
      }).then(function(data) {
        $scope.doneLoading = true;
        $scope.messages = data.messages;

        $timeout(function() {
          viewScroll.scrollBottom();
        }, 0);
      });
    }

    $scope.$watch('input.message', function(newValue, oldValue) {
      // console.log('input.message $watch, newValue ' + newValue);
      if (!newValue) newValue = '';
      localStorage['userMessage-' + $scope.toUser._id] = newValue;
    });

    $scope.sendMessage = function(sendMessageForm) {
      var message = {
        toId: $scope.toUser._id,
        text: $scope.input.message
      };

      // if you do a web service call this will be needed as well as before the viewScroll calls
      // you can't see the effect of this in the browser it needs to be used on a real device
      // for some reason the one time blur event is not firing in the browser but does on devices
      keepKeyboardOpen();
      
      //MockService.sendMessage(message).then(function(data) {
      $scope.input.message = '';

      message._id = new Date().getTime(); // :~)
      message.date = new Date();
      message.username = $scope.user.username;
      message.userId = $scope.user._id;
      message.pic = $scope.user.picture;

      $scope.messages.push(message);

      $timeout(function() {
        keepKeyboardOpen();
        viewScroll.scrollBottom(true);
      }, 0);

      $timeout(function() {
        $scope.messages.push(MockService.getMockMessage());
        keepKeyboardOpen();
        viewScroll.scrollBottom(true);
      }, 2000);

      //});
    };
    
    // this keeps the keyboard open on a device only after sending a message, it is non obtrusive
    function keepKeyboardOpen() {
      console.log('keepKeyboardOpen');
      txtInput.one('blur', function() {
        console.log('textarea blur, focus back on it');
        txtInput[0].focus();
      });
    }

    $scope.onMessageHold = function(e, itemIndex, message) {
      console.log('onMessageHold');
      console.log('message: ' + JSON.stringify(message, null, 2));
      $ionicActionSheet.show({
        buttons: [{
          text: 'Copy Text'
        }, {
          text: 'Delete Message'
        }],
        buttonClicked: function(index) {
          switch (index) {
            case 0: // Copy Text
              //cordova.plugins.clipboard.copy(message.text);

              break;
            case 1: // Delete
              // no server side secrets here :~)
              $scope.messages.splice(itemIndex, 1);
              $timeout(function() {
                viewScroll.resize();
              }, 0);

              break;
          }
          
          return true;
        }
      });
    };

    // this prob seems weird here but I have reasons for this in my app, secret!
    $scope.viewProfile = function(msg) {
      if (msg.userId === $scope.user._id) {
        // go to your profile
      } else {
        // go to other users profile
      }
    };
    
    // I emit this event from the monospaced.elastic directive, read line 480
    $scope.$on('taResize', function(e, ta) {
      console.log('taResize');
      if (!ta) return;
      
      var taHeight = ta[0].offsetHeight;
      console.log('taHeight: ' + taHeight);
      
      if (!footerBar) return;
      
      var newFooterHeight = taHeight + 10;
      newFooterHeight = (newFooterHeight > 44) ? newFooterHeight : 44;
      
      footerBar.style.height = newFooterHeight + 'px';
      scroller.style.bottom = newFooterHeight + 'px'; 
    });



function onProfilePicError(ele) {
  this.ele.src = ''; // set a fallback
}

function getMockMessages() {
  return {"messages":[{
      "_id":"535d625f898df4e80e2a125e",
      "text":"Ionic has changed the game for hybrid app development.",
      "userId":"1",
      "date":"2014-04-27T20:02:39.082Z",
      "read":true,
      "readDate":"2014-12-01T06:27:37.944Z"
    },{
      "_id":"535f13ffee3b2a68112b9fc0",
      "text":"I like Ionic better than ice cream!",
      "userId":"2",
      "date":"2014-04-29T02:52:47.706Z",
      "read":true,
      "readDate":"2014-12-01T06:27:37.944Z"
  }],"unread":0};
}

// configure moment relative time
// moment.locale('en', {
//   relativeTime: {
//     future: "in %s",
//     past: "%s ago",
//     s: "%d sec",
//     m: "a minute",
//     mm: "%d minutes",
//     h: "an hour",
//     hh: "%d hours",
//     d: "a day",
//     dd: "%d days",
//     M: "a month",
//     MM: "%d months",
//     y: "a year",
//     yy: "%d years"
}]);