<?php

get_header();

$idn = get_option('page_for_posts', true);
$post_page_title = get_the_title( $idn );
$bg = get_the_post_thumbnail_url($idn);
$sub = get_field('title', $idn);
$text = get_field('text', $idn);
$tp = get_field('title_posts', $idn);
?>

<!-- BLOCK HEADER -->
    <div class="bl_header bl_header__post">
      <div class="bl_header__bg"></div>
      <div class="container">
        <div class="bl_header__content">
          <h2><?= is_home()? $post_page_title : get_queried_object()->name;  ?></h2>
        </div>
      </div>
    </div>
    <!--END BLOCK HEADER -->

    <!-- BLOCK MINI BLOCK -->
    <div class="bl_mini_block bl_mini_block_contact bl_mini_block_blog">
      <div class="container">
        <div class="mini_block__items">
          <div class="mini_block__item">
            <div class="mini_block__text">
              <h3><?= $sub;?></h3>
              <p><?= $text;?></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--END BLOCK MINI BLOCK -->

    <!-- BLOCK POSTS -->

    <div class="bl_our_brands bl_environmental bl_posts">
      <div class="container">
        <div class="posts__header">
          <h3><?= $tp;?></h3>
          <div class="select_posts">
            <select name="name" id="select_posts">
              <option value="1" checked>Most recent</option>
              <?php $cats = get_terms('category',[
                'hide_empty' => true,
              ]);

              foreach ($cats as $cat):?>
                <option value="<?= $cat->term_id;?>"><?= $cat->name;?></option>
              <?php endforeach;?>
            </select>
          </div>
        </div>

        <div class="our_brands__items">
          <?php $cat = $_GET['category'];
  
  $wp_query = new WP_Query([
    'cat' => $cat,
    'post_type' => 'post',
  ]);
  
  if( $wp_query->have_posts() ) :
 
    while($wp_query->have_posts() ): $wp_query->the_post();
 
      get_template_part('templates/part-content');
 

          	endwhile;
          endif;?>
        </div>
        <?php if (  $wp_query->max_num_pages > 1 ) : ?>
          <script id="true_loadmore">
          var ajaxurl = '<?php echo site_url() ?>/wp-admin/admin-ajax.php';
          var true_posts = '<?php echo serialize($wp_query->query_vars); ?>';
          var current_page = <?php echo (get_query_var('paged')) ? get_query_var('paged') : 1; ?>;
          </script>
        <?php endif; ?>

        <div id="loadmore">
          <!-- <img src="img/blog/loading_icons.svg" alt="loading icon"> -->
        </div>
      </div>
    </div>

    <!--END BLOCK POSTS -->
<?php get_footer();?>