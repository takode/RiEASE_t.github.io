
		//方法2
		window.onload = function () {
			$("#load").fadeOut(2000);
		};
	
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



	effect = 0
	var swiper = new Swiper('.swiper-container', {
		loop: true,
		loopFillGroupWithBlank: false,
		speed: 2500,
		slidesPerView: 5,
		autoplay: true,
		slidesPerColumn: 1,
		spaceBetween: 30,
		centeredSlides: true,
		watchSlidesProgress: true,
		on: {
			setTranslate: function () {
				slides = this.slides
				for (i = 0; i < slides.length; i++) {
					slide = slides.eq(i)
					progress = slides[i].progress
					//slide.html(progress.toFixed(2)); 看清楚progress是怎么变化的
					slide.css({
						'opacity': '',
						'background': ''
					});
					slide.transform(''); //清除样式

					if (effect == 1) {
						slide.transform('scale(' + (1 - Math.abs(progress) / 8) + ')');
					} else if (effect == 2) {
						slide.css('opacity', (1 - Math.abs(progress) / 6));
						slide.transform('translate3d(0,' + Math.abs(progress) * 20 + 'px, 0)');
					} else if (effect == 3) {
						slide.transform('rotate(' + progress * 30 + 'deg)');
					} else if (effect == 4) {
						slide.css('background', 'rgba(' + (255 - Math.abs(progress) * 20) + ',' + (127 +
							progress * 32) + ',' + Math.abs(progress) * 64 + ')');
					}

				}
			},
			setTransition: function (transition) {
				for (var i = 0; i < this.slides.length; i++) {
					var slide = this.slides.eq(i)
					slide.transition(transition);
				}
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	pe = document.getElementById('progressEffect');
	pe.onchange = function () {
		effect = this.value
		swiper.update();
	}





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
 
