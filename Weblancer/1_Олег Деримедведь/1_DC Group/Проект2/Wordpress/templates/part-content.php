<?php 
$exc = get_the_excerpt();
$mb = mb_strimwidth($exc, 0, 250, " ");?>

		<div class="our_brands__item">
            <div class="our_brands__header_img environmental__img" style="background-image: url(<?php the_post_thumbnail_url();?>) !important;"></div>
            <h4 class="blog_title"><?php the_title();?> <span><?php the_time('d M');?></span></h4>
            <p class="blog__posts"><?= $mb;?></p>
            <a href="<?php the_permalink();?>" class="posts_a"></a>
        </div>