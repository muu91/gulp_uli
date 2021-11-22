<?php

/*

Template Name: Why Page

*/

get_header();

?>

<!-- BLOCK HEADER -->
    <div class="bl_header bl_header__why" style="background-image: url(<?php the_post_thumbnail_url();?>);">
      <div class="bl_header__bg"></div>
      <div class="container">
        <div class="bl_header__content">
          <h2><?php the_field('title_6');?></h2>
        </div>
      </div>
    </div>
    <!--END BLOCK HEADER -->

    <!-- BLOCK MINI BLOCK -->
    <div class="bl_mini_block bl_mini_block_2 bl_mini_block_why">
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
      	<?php $imw = get_field('image');?>
        <img src="<?= $imw['url'];?>" alt="<?= $imw['alt'];?>">
      </div>

    </div>
    <!--END BLOCK MINI BLOCK -->

    <!-- BLOCK KEY FETURES -->
    <div class="bl_key_fetures">
      <div class="container">
        <h2><?php the_field('title_1');?></h2>
        <div class="key_fetures__items">

          	<?php

				if( have_rows('icons') ):

					while ( have_rows('icons') ) : the_row();?>

						<?php $im = get_sub_field('icon');?>

				        <div class="key_fetures__item">
				            <div class="key_fetures__icon">
				              <img src="<?= $im['url'];?>" alt="<?= $im['alt'];?>">
				            </div>
				            <div class="key_fetures__text">
				              <h4><?php the_sub_field('title');?></h4>
				              <p><?php the_sub_field('text');?></p>
				            </div>
				        </div>

				    <?php endwhile;

				endif;

			?>
          
          
        </div>

      </div>
    </div>
    <!--END BLOCK KEY FETURES -->

    <!-- BLOCK announce WHY -->
    <div class="bl_announce bl_announce__why">
      <div class="container">
        <div class="announce__ul">
          <ul>
          	<?php

				if( have_rows('title_2') ):

					$j=1;

				 	while ( have_rows('title_2') ) : the_row();?>

				 		<?php $im = get_sub_field('image');?>

				        <li>
			              <div class="announce__item <?= $j%2!=0?'announce__item2':'';?>">
			                <div class="announce__img">
			                   <img src="<?= $im['url'];?>" alt="<?= $im['alt'];?>">
			                </div>
			                <div class="announce__text">
			                    <h3><?php the_sub_field('title');?></h3>
			                    <?php the_sub_field('text');?>
			                </div>
			              </div>
			            </li>

				    <?php $j++;

					endwhile;

				endif;

			?>
          </ul>
        </div>
      </div>
    </div>
    <!--END BLOCK announce -->

    <!-- BLOCK Case Study Title -->
    <?php

		if( have_rows('title_3') ):

			$i=1;

		 	while ( have_rows('title_3') ) : the_row();?>
		 		<?php $im = get_sub_field('image');?>
		 		<style>
		 			<?php if($i==1):?>
					.bl_case_study:before {
					    background-image: url(<?= $im['url'];?>);
					}
					<?php elseif($i==2):?>
					.bl_case_study_2:before {
					    background-image: url(<?= $im['url'];?>) !important;
					}
				<?php endif;?>
		 		</style>	

		        <div class="bl_case_study <?= $i==2?'bl_case_study_2':'';?>">
			      <div class="container">
			        <div class="case_study__content">
			          <div class="case_study__text">
			            <h2><?php the_sub_field('title');?></h2>
			            <p><?php the_sub_field('text');?></p>
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
			        </div>
			      </div>
			    </div>

		    <?php $i++;

			endwhile;

		endif;

	?>

    <!--END BLOCK Case Study Title 2 -->

    <!-- BLOCK KEY FETURES -->
    <div class="bl_testimonials">
      <div class="container">
        <h2><?php the_field('title_4');?></h2>
        <div class="testimonials__items">
        	<?php

				if( have_rows('Testimonials') ):

					while ( have_rows('Testimonials') ) : the_row();?>

						<?php $im = get_sub_field('photo');?>

				        <div class="testimonials__item">
				            <div class="testimonials__icon">
				              <img src="<?= $im['url'];?>" alt="<?= $im['alt'];?>">
				            </div>
				            <div class="testimonials__text">
				              <h4><?php the_sub_field('name');?></h4>
				              <p><?php the_sub_field('text');?></p>
				            </div>
				          </div>

				    <?php endwhile;

				endif;

				?>
          
        </div>

      </div>
    </div>
    <!--END BLOCK KEY FETURES -->

    <!-- BLOCK Charity Work -->
    <div class="bl_charity_work">
      <div class="container">
        <div class="charity_work__text">
            <h2><?php the_field('title_5');?></h2>
          	<p><?php the_field('text_1');?></p>
          	<?php 

				$link = get_field('link');

				if( $link ): 
					$link_url = $link['url'];
					$link_title = $link['title'];
					$link_target = $link['target'] ? $link['target'] : '_self';
					?>
					<a class="link_arrow_2" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
			<?php endif; ?>
        </div>
      </div>

    </div>
    <!--END BLOCK Charity Work -->

<?php get_footer();?>