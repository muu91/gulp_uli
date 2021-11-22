<?php 

get_header(); 

?>

<div class="bl_crumbs crumbs__mobile ">
      <a onclick="javascript:history.back(); return false;" class="btn_back">Back</a>
    </div>
    <!--END BLOCK Crumbs -->

    <!-- BLOCK HEADER -->
    <div class="bl_header bl_header__post">
      <div class="bl_header__bg"></div>
      <div class="container">
        <div class="bl_header__content">
          <h2><?php the_title();?></h2>
        </div>
      </div>
    </div>
    <!--END BLOCK HEADER -->

    <!-- BLOCK Crumbs -->
    <div class="bl_crumbs crumbs__desktop ">
      <a onclick="javascript:history.back(); return false;" class="btn_back">Back</a>
    </div>
    <!--END BLOCK Crumbs -->

    <!-- BLOCK SUB TITLE -->
    <div class="bl_subtitle">
      <div class="container">
	       <?php the_post();

				the_content();

			?>
      </div>
    </div>
    <!--END BLOCK SUB TITLE -->



<?php 

get_footer();

?>