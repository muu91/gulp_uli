<?php

/*

Template Name: Home Page

*/

get_header();

?>

<!-- BLOCK HEADER -->
    <div class="bl_header__main">
      <div class="header__poligon"></div>
      <div class="container">
        <div class="header__content">
          <h1><?php the_field('title_banner');?></h1>
          <?php 

    				$link = get_field('link');

    				if( $link ): 
    					$link_url = $link['url'];
    					$link_title = $link['title'];
    					$link_target = $link['target'] ? $link['target'] : '_self';
    					?>
    					<a class="shop_now" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><span><?php echo esc_html($link_title); ?></span></a>
    			<?php endif; ?>
        </div>
      </div>
    </div>
    <!--END BLOCK HEADER -->

    <!-- BLOCK MINI BLOCK -->
    <div class="bl_mini_block">
      <div class="container">
        <div class="mini_block__items">
          <div class="mini_block__item">
            <?php $imin = get_field('image_1');?>
            <div class="mini_block__img" style="background-image: url(<?= $imin['url'];?>);">
              <!-- <img src="img/index/index_Introduction.jpg" alt="mini_block__img"> -->
            </div>
            <div class="mini_block__text">
              <h3><?php the_field('title');?></h3>
              <?php the_field('text');?>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--END BLOCK MINI BLOCK -->

    <!-- BLOCK SERVICES-->
    <div class="bl_services">
      <div class="container">
        <h2 class="main_h2"><?php the_field('title_6');?></h2>
        <div class="services__items">
          <?php

            if( have_rows('services') ):

              while ( have_rows('services') ) : the_row();?>

                <div class="services__item">
                  <?php $im = get_sub_field('icon');?>
                  <img src="<?= $im['url'];?>" alt="<?= $im['alt'];?>">
                  <h4><?php the_sub_field('title');?></h4>
                  <p><?php the_sub_field('subtitle');?></p>
                  <?php 

                    $link = get_sub_field('link');

                    if( $link ): 
                      $link_url = $link['url'];
                      $link_title = $link['title'];
                      $link_target = $link['target'] ? $link['target'] : '_self';
                      ?>
                      <a class="link_arrow" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
                  <?php endif; ?>
                </div>

              <?php  endwhile;

            endif;

          ?>
        </div>
      </div>
    </div>
    <!--END BLOCK SERVICES -->

    <!-- BLOCK MINI BLOCK 2 -->
    <div class="bl_mini_block_3">
      <div class="container">
        <?php $w = get_field('what');?>
        <div class="mini_block_2__content">
          <h2><?= $w['title'];?></h2>
          <?php 

            $link = $w['link'];

            if( $link ): 
              $link_url = $link['url'];
              $link_title = $link['title'];
              $link_target = $link['target'] ? $link['target'] : '_self';
              ?>
              <a class="btn_blue" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><span><?php echo esc_html($link_title); ?></span></a>
          <?php endif; ?>
        </div>
      </div>
    </div>
    <!-- END BLOCK MINI BLOCK 2 -->

    <!-- BLOCK CLIENTS -->
    <div class="bl_clients">
      <div class="container">
        <h2 class="main_h2"><?php the_field('title_2');?></h2>
        <div class="clients__items">

          <?php

            if( have_rows('gallery') ):

              while ( have_rows('gallery') ) : the_row();?>

                <?php $im = get_sub_field('image');?>

                  <div class="clients__item">
                    <img src="<?= $im['url'];?>" alt="<?= $im['alt'];?>" class="<?php the_sub_field('image_class');?>">
                  </div>

                <?php $i++;

              endwhile;

            endif;

          ?>
          
        </div>
      </div>
    </div>
    <!--END BLOCK CLIENTS -->

    <!-- BLOCK WHO WE ARE contacts -->
    <?php $imp = get_field('image_2');?>
    <div class="bl_print_tool" style="background-image: url(<?= $imp['url'];?>);">
      <div class="bl_print__bg"></div>
      <div class="container">
        <div class="print_tool__content">
          <div class="print_tool__text">
            <h2><?php the_field('title_3');?></h2>
            <p><?php the_field('text_1');?></p>
            <?php 

            $link_1 = get_field('link_1');

            if( $link_1 ): 
              $link_url_1 = $link_1['url'];
              $link_title_1 = $link_1['title'];
              $link_target_1 = $link_1['target'] ? $link_1['target'] : '_self';
              ?>
              <a class="btn_blue" href="<?php echo esc_url($link_url_1); ?>" target="<?php echo esc_attr($link_target_1); ?>"><?php echo esc_html($link_title_1); ?></a>
            <?php endif; ?>
          </div>
          <div class="print_tool__mini">
            <div class="print_tool__submini">
              <?php $c = get_field('contact');?>
              <h2><?= $c['title'];?></h2>
              <p><?= $c['text'];?></p>
              <?php 

                $linkc = $c['link'];

                if( $linkc ): 
                  $link_urlc = $linkc['url'];
                  $link_titlec = $linkc['title'];
                  $link_targetc = $linkc['target'] ? $linkc['target'] : '_self';
                  ?>
                  <a class="btn_blue" href="<?php echo esc_url($link_urlc); ?>" target="<?php echo esc_attr($link_targetc); ?>"><?php echo esc_html($link_titlec); ?></a>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END BLOCK WHO WE ARE -->

    <!-- BLOCK  E_Catalogue -->
    <div class="bl_e_cataloque">
      <div class="container">
        <div class="e_cataloque__content">
          <div class="e_cataloque__text">
            <h3><?php the_field('title_4');?></h3>
            <p><?php the_field('text_2');?></p>
            <div class="ihpone_x">
              <?php $imp = get_field('image_p');?>
              <img src="<?= $imp['url'];?>" alt="index_iphone_x">
            </div>
            <div class="e_cataloque__btns">
              <?php $cbtn = get_field('link_2');

              foreach ($cbtn as $cb):?>

                <a href="<?= $cb['link']['url'];?>" class="btn_blue"><span><?= $cb['link']['title'];?></span></a>

              <?php endforeach;?>
              
            </div>
          </div>
          <div class="e_cataloque__img">
            <?php $imnb = get_field('image_3');?>
            <img src="<?= $imnb['url'];?>" alt="index_notebook">
          </div>
        </div>
      </div>
    </div>
    <!--END BLOCK  E_Catalogue -->

    <!-- BLOCK Reviews -->
    <div class="bl_reviews">
      <div class="container">
        <div class="reviews__content">
          <div class="reviews__author">
            <?php $imphoto = get_field('photo');?>
            <div class="reviews__photo" style="background-image: url(<?= $imphoto['url'];?>);">
            </div>
            <div class="reviews__name"><?php the_field('name');?></div>
          </div>
          <div class="reviews__comment">
            <p><?php the_field('testimonial');?></p>
          </div>

        </div>
      </div>
    </div>
    <!-- end BLOCK Reviews -->

    <!-- BLOCK OUR BRANDS -->
    <div class="bl_our_brands">
      <div class="container">
        <h3><?php the_field('title_5');?></h3>
        <div class="our_brands__items">
          <?php

              if( have_rows('brands') ):

                while ( have_rows('brands') ) : the_row();

                  $im = get_sub_field('image');
                  $ic = get_sub_field('icon');
                  $link = get_sub_field('link');
                    $link_url = $link['url'];
                    $link_title = $link['title'];
                    $link_target = $link['target'] ? $link['target'] : '_self';

                  ?>

                  <div class="our_brands__item">
                    <div class="our_brands__header_img" style="background-image: url(<?= $im['url'];?>);"></div>
                    <img src="<?= $ic['url'];?>" alt="logo">
                    <p><?php the_sub_field('text');?></p>
                    <a class="link_arrow" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
                  </div>

                  <?php endwhile;

              endif;

          ?>
          
        </div>
      </div>
      <!--END BLOCK OUR BRANDS -->
<?php get_footer();?>