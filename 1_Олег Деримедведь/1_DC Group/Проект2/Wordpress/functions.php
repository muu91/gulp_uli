<?php 

add_action( 'wp_enqueue_scripts', 'add_styles' );
add_action( 'wp_enqueue_scripts', 'add_scripts' );
add_action('after_setup_theme', 'theme_register_nav_menu');


function add_styles() {
	wp_enqueue_style('fonts', '/https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	wp_enqueue_style('fontawesomecss', get_template_directory_uri().'/libs/FontAwesome/css/all.min.css');
	wp_enqueue_style('slickcss', get_template_directory_uri().'/libs/Slick/slick.css' );
	wp_enqueue_style('basecss', get_template_directory_uri().'/css/base.css');
	wp_enqueue_style('stylecss', get_template_directory_uri().'/css/style.css');
	wp_enqueue_style( 'theme', get_stylesheet_uri() );

} 

function add_scripts() {

	wp_deregister_script('jquery');

	wp_enqueue_script('jquery', get_template_directory_uri() . '/libs/jQuery/jquery-1.11.3.min.js', array(), false, true);
	wp_enqueue_script( 'slickjs', get_template_directory_uri() . '/libs/Slick/slick.min.js', array(), false, true);
	wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array(), false, true);

	wp_localize_script('script', 'globals',
        array(
            'url' => admin_url('admin-ajax.php'),
            'template' => get_template_directory_uri(),
        )
);

}  



function theme_register_nav_menu(){
	register_nav_menu('main-menu', 'header');
	register_nav_menu('foot-menu', 'footer');
	add_theme_support( 'post-thumbnails'); 
}



if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page();

	acf_add_options_sub_page('Header&Footer');
}


function phone_clear($phone_num){ 
    $phone_num = preg_replace("![^0-9]+!",'',$phone_num);
    return($phone_num); 
}				

function my_acf_init() {
	acf_update_setting('google_api_key', 'AIzaSyA-pBlC3Ex6zwA0zIWMz4H93I3CZvYf8d0'); 
}

add_action('acf/init', 'my_acf_init');

/**
 * CF 7 wraps removed
 */
add_filter('wpcf7_form_elements', function( $content ) {
  $dom = new DOMDocument();
  $dom->preserveWhiteSpace = false;
  $dom->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'), LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

  $xpath = new DomXPath($dom);
  $spans = $xpath->query("//span[contains(@class, 'wpcf7-form-control-wrap')]" );

  foreach ( $spans as $span ) :
    $children = $span->firstChild;
    $span->parentNode->replaceChild( $children, $span );
  endforeach;

  return $dom->saveHTML();
});



add_filter('wpcf7_autop_or_not', '__return_false');


function loadmore(){
 
	$args = unserialize( stripslashes( $_POST['query'] ) );
	$args['paged'] = $_POST['page'] + 1; 
	$args['post_status'] = 'publish';
 
	// обычно лучше использовать WP_Query, но не здесь
	query_posts( $args );
	// если посты есть
	if( have_posts() ) :
 
		// запускаем цикл
		while( have_posts() ): the_post();
 
			get_template_part('templates/part-content');
 
		endwhile;
 
	endif;
	die();
}
 
 
add_action('wp_ajax_loadmore', 'loadmore');
add_action('wp_ajax_nopriv_loadmore', 'loadmore');

function change_post(){
 
 	$cat = $_GET['category'];
 	
 	$wp_query = new WP_Query([
		'cat' => $cat,
	]);
	
	if( $wp_query->have_posts() ) :
 
		while($wp_query->have_posts() ): $wp_query->the_post();
 
			get_template_part('templates/part-content');
 
		endwhile;
 
	endif;

	if (  $wp_query->max_num_pages > 1 ) : ?>
          <script>
          var ajaxurl = '/wp-admin/admin-ajax.php';
          var true_posts = '<?php echo serialize($wp_query->query_vars); ?>';
          var current_page = <?php echo (get_query_var('paged')) ? get_query_var('paged') : 1; ?>;
          </script>
    <?php endif; 

    

	die();
}
 
add_action('wp_ajax_change_post', 'change_post');
add_action('wp_ajax_nopriv_change_post', 'change_post');
