<?php 

get_header(); 

$bgp = get_the_post_thumbnail_url();

?>

    <!-- BLOCK HEADER -->
    <div class="bl_header bl_header__terms" <?php if($bgp):?> style="background-image: url(<?php the_post_thumbnail_url();?>);" <?php endif;?>>
      <div class="bl_header__bg"></div>
      <div class="container">
        <div class="bl_header__content">
          <h2><?php the_title();?></h2>
        </div>
      </div>
    </div>
    <!--END BLOCK HEADER -->

    <!-- BLOCK TERMS TEXT -->

    <div class="bl_terms__text">
      <div class="container">
        <?php the_post();
        the_content();
        ?>
      </div>
    </div>
    <!--END BLOCK TERMS TEXT -->



<?php 

get_footer();

?>