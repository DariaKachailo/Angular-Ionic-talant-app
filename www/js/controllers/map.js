talant.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
	$scope.initialize = function() {
		var myLatlng = new google.maps.LatLng(50.4546600,30.5238000);

		var mapOptions = {
			center: myLatlng,
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		if(navigator.geolocation) { 
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				var infowindow = new google.maps.InfoWindow({
					map: map,
					position: pos,
					content: 'My location'
				});
				map.setCenter(pos);
			}, function() {
				handleNoGeolocation(true);
			});
		} else {
			// Browser doesn't support Geolocation
			handleNoGeolocation(false);
		};

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Uluru (Ayers Rock)'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

		$scope.map = map;
	}
	google.maps.event.addDomListener(window, 'load', $scope.initialize);
});