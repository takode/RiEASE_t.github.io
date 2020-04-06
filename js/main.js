
	
	AOS.init();

	
function initMap() {
	// The location of Uluru
	var uluru = {
		lat: 25.049212,
		lng: 121.2910268
	};
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 16,
			center: uluru,
			styles: [{
					"elementType": "geometry",
					"stylers": [{
						"color": "#f5f5f5"
					}]
				},
				{
					"elementType": "labels.icon",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#f5f5f5"
					}]
				},
				{
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#bdbdbd"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [{
						"color": "#eeeeee"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [{
						"color": "#e5e5e5"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [{
						"color": "#ffffff"
					}]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"color": "#dadada"
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				},
				{
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				},
				{
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": [{
						"color": "#e5e5e5"
					}]
				},
				{
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [{
						"color": "#eeeeee"
					}]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [{
						"color": "#c9c9c9"
					}]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				}
			]
		});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		title: 'ZHANG SI YU',
		icon: './img/map-logo.png'
	});
}


	$(document).ready(function () {
		$('.industry-wrapper .col-md-3 figure').mouseover(function () {
			$('.col-md-3 figure').addClass("effect-active");
			$(this).removeClass("effect-active");
		});
	});

	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 400) {
	// 		$('.navbar-top').fadeOut();
	// 	} else {
	// 		$('.navbar-top').fadeIn();
	// 	}
	// });


 
	function myFunction() { 
	document.getElementById( 
	"mySelect").selectedIndex = "0"; 
	}
	function myFunction2() { 
	document.getElementById( 
	 "mySelect").selectedIndex = "1"; 
	}
	function myFunction3() { 
	document.getElementById( 
	 "mySelect").selectedIndex = "2"; 
	}
	function myFunction4() { 
	document.getElementById( 
	 "mySelect").selectedIndex = "3"; 
	}
	function myFunction5() { 
	document.getElementById( 
	 "mySelect").selectedIndex = "4"; 
	} 


