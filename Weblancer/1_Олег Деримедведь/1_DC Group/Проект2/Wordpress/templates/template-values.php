<?php

/*

Template Name: Values Page

*/

get_header();

?>
    <!-- BLOCK HEADER -->
    <div class="bl_header bl_header__values" style="background-image: url(<?php the_post_thumbnail_url();?>);">
      <div class="bl_header__bg"></div>
      <div class="container">
        <div class="bl_header__content">
          <h2><?php the_field('title');?></h2>
        </div>
      </div>
    </div>
    <!--END BLOCK HEADER -->

    <!-- BLOCK MINI BLOCK -->
    <div class="bl_mini_block bl_mini_block_2">
      <div class="container">
        <div class="mini_block__items">
          <div class="mini_block__item">
            <div class="mini_block__text">
              	<h3><?php the_field('title_1');?></h3>
              	<?php the_field('text');?>
            </div>
          </div>
        </div>
      </div>
      <div class="mini_block__img">
      	<?php $imv = get_field('image');?>
        <img src="<?= $imv['url'];?>" alt="<?= $imv['alt'];?>">
      </div>

    </div>
    <!--END BLOCK MINI BLOCK -->

    <!-- BLOCK ELENEMNTS -->
    <div class="bl_elements">
      <div class="container">
        <h2><?php the_field('title_2');?></h2>
        <div class="elements__items">
          	<?php

			if( have_rows('icons') ):

				while ( have_rows('icons') ) : the_row();?>

					<?php $im = get_sub_field('icon');?>

			        <div class="elements__item">
			            <img src="<?= $im['url'];?>" alt="<?= $im['alt'];?>">
			            <p><?php the_sub_field('text');?></p>
			          </div>

			    <?php endwhile;

			endif;

			?>
          

        </div>
      </div>
    </div>
    <!--END BLOCK ELENEMNTS -->

    <!-- BLOCK CSR -->
    <div class="bl_csr">
    	<?php $imcsr = get_field('image_1');?>
      <div class="csr_bg" style="background-image: url(<?= $imcsr['url'];?>);">
        <div class="csr_poligon"></div>
      </div>
      <div class="csr_mini">
        <h3><?php the_field('title_3');?></h3>
        <p><?php the_field('text_1');?></p>
        <?php 

			$link = get_field('link');

			if( $link ): 
				$link_url = $link['url'];
				$link_title = $link['title'];
				$link_target = $link['target'] ? $link['target'] : '_self';
				?>
				<a class="btn_blue" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
		<?php endif; ?>
      </div>
    </div>
    <!--END BLOCK CSR -->

    <!-- BLOCK environmental -->
    <div class="bl_our_brands bl_environmental">
      <div class="container">
        <h3><?php the_field('title_4');?></h3>
        <div class="our_brands__items">
          	<?php

				if( have_rows('Environmental') ):

					while ( have_rows('Environmental') ) : the_row();?>

						<?php $im = get_sub_field('image');?>

				        <div class="our_brands__item">
				            <div class="our_brands__header_img environmental__img" style="background-image: url(<?= $im['url'];?>) !important;"></div>
				            <h4><?php the_sub_field('title');?></h4>
				            <p><?php the_sub_field('text');?></p>
				          </div>

				    <?php endwhile;

				endif;

			?>
          

        </div>
      </div>
    </div>
    <!--END BLOCK environmental -->

    <!-- BLOCK TEAM -->
    <div class="bl_team">
      <div class="container">
        <h3><?php the_field('title_5');?></h3>
        <div class="team__items">
            <?php

				if( have_rows('team') ):

					while ( have_rows('team') ) : the_row();?>

				        <div class="team_item">
				            <div class="team__img">
				            	<?php $im = get_sub_field('photo');?>
				              <img src="<?= $im['url'];?>" alt="team__img">
				            </div>
				            <p><?php the_sub_field('name');?></p>
				            <ul>
				              <li>
				                <p><?php the_sub_field('address');?></p>
				              </li>
				              <li>
				                <a href="tel:<?= phone_clear(get_sub_field('phone')); ?>"><?php the_sub_field('phone');?></a>
				              </li>
				              <li>
				                <a href="mailto:<?php the_sub_field('email');?>"><?php the_sub_field('email');?></a>
				              </li>
				            </ul>
            			</div>

				    <?php endwhile;

				endif;

			?>
          
        </div>
      </div>
    </div>
    <!--END BLOCK TEAM -->

    <!-- BLOCK Initiatives -->
    <div class="bl_initiatives">
      <div class="container">
        <h3><?php the_field('title_6');?></h3>
        <p class="bottom_border"><?php the_field('subtitle');?></p>
        <div class="initiatives__items">
          
	        <?php

				if( have_rows('initiative') ):

					while ( have_rows('initiative') ) : the_row();?>

				        <div class="initiatives__item">
				            <h4><?php the_sub_field('title');?></h4>
				            <p><?php the_sub_field('text');?></p>

				        </div>

				    <?php endwhile;

				endif;

			?>
          
          
        </div>
      </div>
    </div>
    <!--End BLOCK Initiatives -->


<?php get_footer();?>