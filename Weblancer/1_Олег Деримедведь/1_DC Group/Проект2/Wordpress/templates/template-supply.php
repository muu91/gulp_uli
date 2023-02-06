<?php

/*

Template Name: Supply Page

*/

get_header();

?>

   <!-- BLOCK HEADER -->
    <div class="bl_header" style="background-image: url(<?php the_post_thumbnail_url();?>);">
      <div class="bl_header__bg"></div>
      <div class="container">
        <div class="bl_header__content">
          <h2><?php the_field('title_1');?></h2>
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
              <h3><?php the_field('title');?></h3>
              <?php the_field('text');?>
            </div>
          </div>
        </div>
      </div>
      <div class="mini_block__img">
      	<?php $im1 = get_field('image_1');?>
        <img src="<?= $im1['url'];?>" alt="supply_bl2">
      </div>

    </div>
    <!--END BLOCK MINI BLOCK -->

    <!-- BLOCK BTNS UL -->
    <div class="bl_btns_ul">
      <div class="container">
        <div class="btns_ul__content">
          <ul>
          	<?php $link = get_field('link');

          	foreach ($link as $l):?>
          		<li><a href="<?= $l['link']['url'];?>"><?= $l['link']['title'];?></a></li>
          	<?php endforeach;?>
            <li class="none_li"><a class="none_li">Import / Export</a></li>
          </ul>
        </div>
        <div class="btns_ul__select">
          <select name="name" id="btns_ul__select">
          	<?php $i=1;
          	$link2 = get_field('link');
          	foreach ($link2 as $l):?>
          		<option value="<?= $i;?>" <?= $i==1 ? 'checked href="'. $l['link']['url'].'"':'';?>><?= $l['link']['title'];?></option>
          	<?php $i++;
          	endforeach;?>
          </select>
        </div>
      </div>
    </div>
    <!-- END BLOCK BTNS UL -->

    <!-- BLOCK announce -->
    <div class="bl_announce">
      <div class="container">
        <div class="announce__ul">
          <ul>
            <?php

              $t = 1;

                if( have_rows('Label') ):

                  while ( have_rows('Label') ) : the_row();

                    $im = get_sub_field('image');
                    $link = get_sub_field('link');

                        $link_url = $link['url'];
                        $link_title = $link['title'];
                        $link_target = $link['target'] ? $link['target'] : '_self';

                  ?>
  

                    <li>
                      <div class="announce__item <?= $t%2==0?'announce__item2':'';?>" id="<?php the_sub_field('id');?>">
                        <div class="announce__img">
                          <img src="<?= $im['url'];?>" alt="<?= $im['alt'];?>">
                        </div>
                        <div class="announce__text">
                          <h3><?php the_sub_field('title');?></h3>
                          <p><?php the_sub_field('text');?></p>
                          <?php if(get_sub_field('numder')):?>
                            <div class="announce__phone">
                              <?php the_sub_field('numder');?>
                            </div>
                          <?php endif;?>
                          <a class="link_arrow_2" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
                        </div>
                      </div>
                    </li>

                    <?php $t++;

                   endwhile;

                endif;

            ?>
          </ul>
        </div>
      </div>
    </div>
    <!--END BLOCK announce -->

<?php get_footer();?>