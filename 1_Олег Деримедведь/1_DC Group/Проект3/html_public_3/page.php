<?php
get_header();
$page_id = get_queried_object_id(); ?>

    <div class="bl_header bl_header__become_a_quest">

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
                        <?php the_title()?>
                    </h1>
                    <!-- <a href="#" class="btn_header">Download our brochure</a> -->
                </div>
                <div class="bl_header__img">
                    <img src="<?= get_the_post_thumbnail_url($page_id, 'full') ?>" alt="bl_header_img">
                </div>
            </div>
        </div>
    </div>

    <div class="bl_become_adapt">

        <div class="icons">

            <img src="<?= get_template_directory_uri() ?>/assets/img/become_a_quest/become_adapt_petals.svg" alt="become_adapt_petals" class="absolute become_adapt_petals">

            <img src="<?= get_template_directory_uri() ?>/assets/img/icons/dots_black.svg" alt="dots_black2" class="absolute dots_black2">

        </div>
        <div class="container" style="text-align: center;">
            <?php the_post(); the_content();?>
        </div>
    </div>

<?php get_footer() ?>