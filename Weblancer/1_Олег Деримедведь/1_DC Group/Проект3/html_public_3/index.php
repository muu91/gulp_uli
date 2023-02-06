<?php
get_header();
$page_id = get_queried_object_id();
?>

<div class="bl_header bl_header__episodes">

    <div class="icons">
        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/dots1.svg" alt="dots1" class="absolute dots1">
        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/dots1.svg" alt="dots1" class="absolute dots2">

        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/petals1.svg" alt="petals1" class="absolute petals1">
        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/circle1.svg" alt="circle1" class="absolute circle1">
        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/circle_big.svg" alt="circle_big" class="absolute circle_big">
    </div>

        <div class="container">
            <div class="bl_header__content">
                <div class="bl_header__text">
                    <h1>
                        <?php single_post_title() ?>
                    </h1>
                </div>
                <div class="bl_header__img">

                    <img src="<?= get_the_post_thumbnail_url($page_id, 'full') ?>" alt="bl_header_img">
                </div>
            </div>
        </div>
</div>

<div class="bl_episodes">
    <div class="icons">
        <img src="<?= get_template_directory_uri() ?>/assets/img/episodes/bl_episodes__petals1.svg" alt="bl_episodes__petals1" class="absolute bl_episodes__petals1">

        <img src="<?= get_template_directory_uri() ?>/assets/img/episodes/bl_episodes__petals2.svg" alt="bl_episodes__petals2" class="absolute bl_episodes__petals2">

        <img src="<?= get_template_directory_uri() ?>/assets/img/episodes/bl_episodes__circle1.svg" alt="bl_episodes__circle1" class="absolute bl_episodes__circle1">

        <!-- Little Icons -->

        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/petals_pink2.svg" alt="petals_pink2" class="absolute petals_pink2">

        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/petals_pink2.svg" alt="petals_pink3" class="absolute petals_pink3">

        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/circle_pink.svg" alt="circle_pink" class="absolute circle_pink">

        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/dots_black.svg" alt="dots_black" class="absolute dots_black">

        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/petals_blue1.svg" alt="petals_blue1" class="absolute petals_blue1">

        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/petals_blue2.svg" alt="petals_blue2" class="absolute petals_blue2">

        <!-- dots -->

        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/dots_black.svg" alt="dots_black" class="absolute dots_black2">

        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/dots_black.svg" alt="dots_black" class="absolute dots_black3">

        <img src="<?= get_template_directory_uri() ?>/assets/img/icons/dots_black.svg" alt="dots_black" class="absolute dots_black4">

    </div>
    <div class="container">
        <div class="a_episodes__items">
            <?php
            $args = array(
                'post_type' => 'post',
                'posts_per_page' => 4
            );

            $loop = new WP_Query($args);
            $count = $loop->max_num_pages;

            if ($loop -> have_posts()) : $i = 1;  while ($loop -> have_posts()) : $loop -> the_post();
            $id = get_the_ID(); ?>

                <div class="a_episodes__item">
                    <a href="<?= get_permalink($id) ?>">
                        <div class="a_episodes__itemin a_episodes__item<?= $i ?>">
                            <div class="a_episodes__announce">
                                <img src="<?= get_the_post_thumbnail_url($id, 'full') ?>" alt="episode">
                                <div class="a_episodes__logo">
                                    <img src="<?= get_template_directory_uri() ?>/assets/img/logo.svg" alt="logo">
                                </div>
                                <div class="a_episodes__title">
                                    <h3>
                                        <?php the_title() ?>
                                    </h3>
                                </div>
                            </div>
                            <div class="a_episodes__text">
                                <p>
                                    <?php the_excerpt() ?>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div class="a_episodes__data">
                        <div class="a_episodes__subdata">
                            <a href="<?= get_permalink($id) ?>">
                                <h3>
                                    <span>
                                      <?= get_fld('number', 1,  $id) ?>
                                    </span>
                                    <?= get_fld('author', 1,  $id) ?> – <?php the_title() ?>
                                </h3>
                            </a>
                            <p><?= get_fld('subtitle', 1, $id) ?></p>
                            <div class="soc">
                                <a class="btn__soc" data-btn="bio<?= $i ?>">
                                    <?= get_fld('button_text', 1,  $id) ?>
                                </a>
                                <?php if( have_rows('links', $id) ): while( have_rows('links', $id) ) : the_row(); ?>
                                    <?= get_lnk('link', 2, 'btn__soc', $id, true) ?>
                                <?php endwhile; endif; ?>
                            </div>
                        </div>
                        <div class="a_episodes__data_text" data-text="bio<?= $i++ ?>">
                            <p class="tabs__content">
                                <?= get_fld('text_1', 1, $id) ?>
                            </p>
                        </div>
                    </div>
                </div>
            <?php endwhile; endif;wp_reset_postdata();?>
        </div>
        <div class="episodes__more">
        <?php if($loop->max_num_pages>1) echo '<a class="episodes__btn">More Videos</a>'; ?>
        </div>
        <div class="preloader">
            <img src="<?= get_template_directory_uri() ?>/assets/img/icons/petals_pink2.svg" alt="preloader">
        </div>
    </div>
</div>
<script type="text/javascript">
    var ajaxurl = '<?= admin_url('admin-ajax.php') ?>';
    var noposts = '<?= __('No older posts found', 'twentyfifteen') ?>';
    var page_id = <?= get_queried_object_id() ?>;
    var count = <?= $count ?>;
</script>

<?php get_footer() ?>
