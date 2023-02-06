<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Know Show<?php wp_title('-') ?></title>
    <?php wp_head() ?>
</head>

<body <?php body_class() ?>>

<header class="main_header <?= (is_single()) ? 'main_header__episodes_2lvl_v2' : ''?>">
    <div class="container">
        <div class="header__content bl_header__content_icons">

            <div class="header__logo">
                <a href="<?= get_site_url() ?>">
                    <?= get_img('logo', 1, '', 'options') ?>
                </a>
            </div>

            <nav class="header__menu drop__li">
                <?php
                wp_nav_menu( [
                    'theme_location'=>'header',
                    'container' => 0,
                    //'depth' => 0
                    'walker'        => new magomra_walker_nav_menu
                ] );
                ?>
            </nav>

            <div class="social_icons">
                <ul>
                    <?php if( have_rows('social', 'options') ): while( have_rows('social', 'options') ) : the_row(); ?>
                        <li>
                            <a href="<?= get_lnk('link', 2) ?>" target="_blank">
                                <?= get_img('icon', 2) ?>
                            </a>
                        </li>
                    <?php endwhile; endif; ?>
                </ul>
            </div>

            <a href="#" class="btn_header popup_btn_index">Listen now</a>

            <div class="header__burger">
                <span></span>
            </div>

        </div>

        <!-- MEDIA -->
        <div class="header__content header__content__media">

            <nav class="header__menu">
                    <?php
						wp_nav_menu( array(
						'theme_location' => 'mobile',
						'menu_id'        => '',
						'menu_class'      => '',
						'container'       => '',
						'container_class' => '',
						'container_id'    => '',
                        'items_wrap' => '<ul>%3$s</ul>',
                        'walker' => new submenu_wrap(),
						) );?>
            </nav>

            <div class="social_icons">
                <ul>
                    <?php if( have_rows('social', 'options') ): while( have_rows('social', 'options') ) : the_row(); ?>
                        <li>
                            <a href="<?= get_lnk('link', 2) ?>" target="_blank">
                                <?= get_img('icon', 2) ?>
                            </a>
                        </li>
                    <?php endwhile; endif; ?>
                </ul>
            </div>

            <a href="#" class="btn_header popup_btn_index">Listen now</a>
        </div>
        <!--END MEDIA -->
    </div>
</header>
<!--END HEADER -->
<!-- ================================================ -->