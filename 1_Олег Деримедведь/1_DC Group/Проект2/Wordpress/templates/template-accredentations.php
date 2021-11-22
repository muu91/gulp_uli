<?php

/*

Template Name: Accreditations Page

*/

get_header();

?>

<!-- BLOCK HEADER -->
    <div class="bl_header bl_header__accreditations" style="background-image: url(<?php the_post_thumbnail_url();?>);">
      <div class="bl_header__bg"></div>
      <div class="container">
        <div class="bl_header__content">
          <h2><?php the_field('title_2');?></h2>
        </div>
      </div>
    </div>
    <!--END BLOCK HEADER -->

    <!-- BLOCK MINI BLOCK -->
    <div class="bl_mini_block bl_mini_block_2 bl_mini_block_accreditations">
      <div class="container">
        <div class="mini_block__items">
          <div class="mini_block__item">
            <div class="mini_block__text">
              <h3><?php the_field('title');?></h3>
              <?php the_field('text');?>
            </div>
          </div>
        </div>
      </div>
      <div class="mini_block__img">
      	<?php $ima = get_field('image');?>
        <img src="<?= $ima['url'];?>" alt="<?= $ima['alt'];?>">
      </div>

    </div>
    <!--END BLOCK MINI BLOCK -->

    <!-- BLOCK certified -->
    <?php

		if( have_rows('Certified') ):

			$i=1;

		 	while ( have_rows('Certified') ) : the_row();?>

		 		<?php $im = get_sub_field('image');?>

		        <div class="bl_certified <?= $i%2==0?'bl_certified_2':'';?>">
			      <div class="certified_bg" style="background-image: url(<?= $im['url'];?>);">
			        <div class="certified_poligon"></div>
			      </div>
			      <div class="certified_mini">
			        <h3><?php the_sub_field('title');?></h3>
			        <p><?php the_sub_field('text');?></p>
			        <?php 

						$link = get_sub_field('link');

						if( $link ): 
							$link_url = $link['url'];
							$link_title = $link['title'];
							$link_target = $link['target'] ? $link['target'] : '_self';
							?>
							<a class="link_arrow_2" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
					<?php endif; ?>
			      </div>
			    </div>

		    <?php $i++;

			endwhile;

		endif;

	?>
    <!--END BLOCK certified -->

<?php get_footer();?>