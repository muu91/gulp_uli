<?php

/*

Template Name: Contacts Page

*/

get_header();

?>
    <!-- BLOCK HEADER -->
    <div class="bl_header bl_header__contact" style="background-image: url(<?php the_post_thumbnail_url();?>);">
      <div class="bl_header__bg"></div>
      <div class="container">
        <div class="bl_header__content">
          <h2><?php the_title();?></h2>
        </div>
      </div>
    </div>
    <!--END BLOCK HEADER -->

    <!-- BLOCK MINI BLOCK -->
    <div class="bl_mini_block bl_mini_block_contact">
      <div class="container">
        <div class="mini_block__items">
          <div class="mini_block__item">
            <div class="mini_block__text">
              <h3><?php the_field('title');?></h3>
              <p><?php the_field('subtitle');?></p>

            </div>
          </div>
        </div>
      </div>


    </div>
    <!--END BLOCK MINI BLOCK -->

    <!-- FORM -->
    <div class="bl_contacts bl_contacts__contacts">
      <div class="container">
        <div class="contacts__content">
          <div class="contacts__items">
            <div class="contacts__form">
              <?= do_shortcode('[contact-form-7 id="433" title="Contact form"]');?>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--END FORM -->

    <!-- MAPS -->
    <div class="bl_maps">
      <div class="maps__content">
        <div class="maps__map">
          <div id="map">
          </div>
        </div>
        <div class="maps__data">
          <h3><?php the_field('title_1');?></h3>
          <ul>
          	<?php $loc = get_field('location');?>
            <li class="address">
              <p><?= $loc['address'];?></p>
            </li>
            <li>
              <a href="tel:<?= phone_clear($loc['phone']);?>" class="phone"><?= $loc['phone'];?></a>
            </li>
            <li>
              <a href="mailto:<?= $loc['email'];?>" class="email"><?= $loc['email'];?></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--END MAPS -->

    <!--  CONTACTS OUR BRANDS -->
    <div class="bl_our_brands__contacts">
      <div class="container">
        <h3><?php the_field('title_2');?></h3>
        <div class="our_brands__items">
          
          	<?php

				if( have_rows('brands') ):

					while ( have_rows('brands') ) : the_row();?>

				        <div class="our_brands__item">
				        	<?php $im = get_sub_field('icon');?>
				            <img src="<?= $im['url'];?>" alt="<?= $im['alt'];?>">
				            <ul>
				              <li class="address">
				                <p><?php the_sub_field('address');?></p>
				              </li>
				              <li>
				                <a href="tel:<?= phone_clear(get_sub_field('phone'));?>" class="phone"><?php the_sub_field('phone');?></a>
				              </li>
				              <li>
				                <a href="mailto:<?php the_sub_field('email');?>" class="email"><?php the_sub_field('email');?></a>
				              </li>
				            </ul>
				          </div>

				    <?php endwhile;

				endif;

			?>
          


        </div>
      </div>

    </div>
    <!-- END CONTACTS OUR BRANDS -->
  <script>
  	<?php $map = get_field('map');?>
    // Initialize and add the map
    function initMap() {
      // The location of Uluru
      var uluru = {
        lat: <?= $map['lat'];?>,
        lng: <?= $map['lng'];?>
      };
      // The map, centered at Uluru
      var map = new google.maps.Map(
        document.getElementById('map'), {
          zoom: 10,
          center: {
            lat: 51.5080632,
            lng: -0.1609431
          },
          mapTypeControl: false,
          scrollwheel: false,
          disableDefaultUI: false,
          position: uluru,
          map: map,
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
              "stylers": [{
                "visibility": "off"
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
              "featureType": "administrative.neighborhood",
              "stylers": [{
                "visibility": "off"
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
              "elementType": "labels.text",
              "stylers": [{
                "visibility": "off"
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
              "featureType": "road",
              "elementType": "labels",
              "stylers": [{
                "visibility": "off"
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
              "elementType": "labels.text",
              "stylers": [{
                "visibility": "off"
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
        map: map
      });
    }
  </script>

  <script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-pBlC3Ex6zwA0zIWMz4H93I3CZvYf8d0&callback=initMap">
  </script>
<?php get_footer();?>