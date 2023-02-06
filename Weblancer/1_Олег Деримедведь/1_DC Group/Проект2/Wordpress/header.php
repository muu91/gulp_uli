<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset');?>">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title><?php echo wp_get_document_title(); ?></title>
		<?php wp_head();?>
</head>

<body <?php body_class() ?>>

	<!-- HEADER -->
  <header class="main_header">
    <!-- <div class="feedback_message">
    </div> -->

    <?php if(is_front_page()):?>
      <div class="top_header">
        <div class="top_header__content container">
          <p><?php the_field('text_b');?></p>
          <?php 

            $link = get_field('link');

            if( $link ): 
              $link_url = $link['url'];
              $link_title = $link['title'];
              $link_target = $link['target'] ? $link['target'] : '_self';
              ?>
              <a class="btn_blue" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><span><?php echo esc_html($link_title); ?></span></a>
          <?php endif; ?>
        </div>
      </div>
    <?php endif;?>

    <div class="header__content container">
      <div class="header__burger">
        <span></span>
      </div>
      <div class="header__logo">
        <a href="<?= get_home_url();?>">
          <?php $iml = get_field('logo', 'options');?>
          <img src="<?= $iml['url'];?>" alt="logo">
        </a>
      </div>
      <?php 
        wp_nav_menu([
          'theme_location' => 'main-menu',
          'container' => 'nav',
          'container_class' => 'header__menu',
          'items_wrap' => '%3$s',
        ]);
      ?>
    </div>
  </header>
  <!--END HEADER -->

  <main>