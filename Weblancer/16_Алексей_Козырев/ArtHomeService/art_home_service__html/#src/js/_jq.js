
$(document).ready(function () {

    // ========================================
    // ---------- VARIABLES ----------
    let windowWidthJq = $(window).width();
    // ---------- END VARIABLES ----------
    // ========================================
    // ---------- HEADER ----------
    // ----------------------------------------
    // ----- BURGER -----
    $('.btn_burger_click').click(function () {
        $('.header__fixed_menu').addClass('active');
        $('body').addClass('lock');
    });
    $('.btn_burger_click__close').click(function () {
        $('.header__fixed_menu').removeClass('active');
        $('body').removeClass('lock');
    });
    // ----- END BURGER -----
    // ----------------------------------------
    // ---------- END HEADER ----------
    // ----------------------------------------
    // ---------- INDEX ----------
    // ----------------------------------------
    // ----- PHOTO VIDEO -----
    // if (windowWidthJq <= 600) {
    //     $('.bl_photo_video__slider').removeAttr('dir');
    // }
    // $('.btn_right12').click(function () {
    //     $("[data-anim=blue_blocks__item]").each(function () {
    //         let blue_blocks__item = $('[data-anim=blue_blocks__item]').length;
    //         if (blue_blocks__item <= 2) {
    //             $(this).next().attr('data-anim', 'blue_blocks__item');
    //         }
    //         if (blue_blocks__item > 1) {
    //             $('.btn_right12').hide();
    //         }
    //     });
    // });
    // ----- END PHOTO VIDEO -----
    // ----------------------------------------
    // ----- OUR WORKS -----
    $('.swiper__counts').click(function () {
        let bl_our_works__item = $(this).parents('.bl_our_works__item');
        let fancy_a = bl_our_works__item.find('[data-fancybox]');
        fancy_a[0].click();
    });
    $('.btn_expand').click(function () {
        let bl_our_works__item = $(this).parents('.bl_our_works__item');
        let fancy_a = bl_our_works__item.find('[data-fancybox]');
        fancy_a[0].click();
    });
    $('.bl_our_works__slider').each(function () {
        let swiper_slide__len = $(this).find('.swiper-slide').length;
        let swiper__counts = $(this).parents('.bl_our_works__item').find('.swiper__counts');

        if (swiper_slide__len > 4) {
            swiper__counts.addClass('swiper__counts__active');
            let swiper__counts__len = swiper_slide__len - 4;
            swiper__counts.find('span').html(swiper__counts__len);
        }
    })
    // ----- END OUR WORKS -----
    // ----------------------------------------
    // ----- AREA -----
    $('.minus').click(function (e) {
        e.preventDefault();
        let $input = $(this).parent().find('.number');
        let count = parseInt($input.text()) - 1;
        if (count >= 1) {
            $input.text(count);
            $input.html();
            return false;
        }
    });
    $('.plus').click(function (e) {
        e.preventDefault();
        let $input = $(this).parent().find('.number');
        $input.text(parseInt($input.text()) + 1);
        $input.html();
        return false;
    });

    $('.count a').click(function (e) {
        e.preventDefault();
        let $input = $(this).parent().find('.number');
        let count = parseInt($input.text());
        let minus = $(this).parent().find('.minus');
        // console.log(count);
        if (count >= 2) {
            minus.removeClass('deactivation');
        } else {
            minus.addClass('deactivation');
        }
    });
    // ----- END AREA -----
    // ----------------------------------------

    // ---------- END INDEX ----------
    // ========================================
    // ---------- REVIEW ----------
    if (windowWidthJq > 700) {
        $('.bl_review_p__items > ul').masonry({
            // options
            // itemSelector: '.grid-item',
            // columnWidth: 200
            // gutter: 270,
        });
    }
    $('.bl_review_p__counts').click(function () {
        let bl_review_p__imgs__mini = $(this).parents('.bl_review_p__imgs__mini');
        let fancy_a = bl_review_p__imgs__mini.find('[data-fancybox]');
        fancy_a[0].click();
    });
    $('.bl_review_p__imgs__mini').each(function () {
        let li__len = $(this).find('li').length;
        console.log(li__len)
        let bl_review_p__counts = $(this).find('.bl_review_p__counts');

        if (li__len > 4) {
            bl_review_p__counts.addClass('bl_review_p__counts__active');
            let bl_review_p__counts__len = li__len - 4;
            bl_review_p__counts.find('span').html(bl_review_p__counts__len);
        }
    })
    // ---------- END REVIEW ----------
    // ========================================
    // ---------- INTERESTING ----------
    if (windowWidthJq > 600) {
        $('.bl_interesting__items > ul').masonry({
            // options
            // itemSelector: '.grid-item',
            // columnWidth: 570,
            // gutter: 270,
        });
    }
    let bl_interesting__items_li = $('.bl_interesting__items li');

    // console.log(windowWidthJq);

    bl_interesting__items_li.each(function () {
        let bl_interesting__item_offset = $(this).offset();
        let bl_interesting__item_left = bl_interesting__item_offset.left;
        // console.log(bl_interesting__item_left)

        if (windowWidthJq < 2560 && windowWidthJq > 1350) {
            if (bl_interesting__item_left > 570) {
                $(this).find('.bl_interesting__item').addClass('mr-0');
            } else {
                $(this).find('.bl_interesting__item').removeClass('mr-0');
            }
        } else if (windowWidthJq <= 1350 && windowWidthJq > 768) {
            if (bl_interesting__item_left > 380) {
                $(this).find('.bl_interesting__item').addClass('mr-0');
            } else {
                $(this).find('.bl_interesting__item').removeClass('mr-0');
            }
        } else if (windowWidthJq <= 768 && windowWidthJq > 600) {
            if (bl_interesting__item_left > 290) {
                $(this).find('.bl_interesting__item').addClass('mr-0');
            } else {
                $(this).find('.bl_interesting__item').removeClass('mr-0');
            }
        }
    })

    // let width992 = false;
    // let width992__2 = false;
    // let width992__3 = false;

    // $(window).resize(function () {
    //     let width992_2 = $(window).width();
    //     if (!width992 && width992_2 < 2560) {
    //         bl_interesting__items_li.each(function () {
    //             let bl_interesting__item_offset = $(this).offset();
    //             let bl_interesting__item_left = bl_interesting__item_offset.left;
    //             if (bl_interesting__item_left > 570) {
    //                 $(this).find('.bl_interesting__item').addClass('mr-0');
    //             } else {
    //                 $(this).find('.bl_interesting__item').removeClass('mr-0');
    //             }
    //         })
    //         width992 = true;
    //     } else if (!width992__2 && width992_2 < 1350) {
    //         bl_interesting__items_li.each(function () {
    //             let bl_interesting__item_offset_2 = $(this).offset();
    //             let bl_interesting__item_left_2 = bl_interesting__item_offset_2.left;
    //             if (bl_interesting__item_left_2 > 380) {
    //                 $(this).find('.bl_interesting__item').addClass('mr-0');
    //             } else {
    //                 $(this).find('.bl_interesting__item').removeClass('mr-0');
    //             }
    //         })
    //         width992__2 = true;
    //     } else if (!width992__3 && width992_2 < 768) {
    //         bl_interesting__items_li.each(function () {
    //             let bl_interesting__item_offset_2 = $(this).offset();
    //             let bl_interesting__item_left_2 = bl_interesting__item_offset_2.left;
    //             if (bl_interesting__item_left_2 > 290) {
    //                 $(this).find('.bl_interesting__item').addClass('mr-0');
    //             } else {
    //                 $(this).find('.bl_interesting__item').removeClass('mr-0');
    //             }
    //         })
    //         width992__3 = true;
    //     }
    // });
    // ---------- END INTERESTING ----------
    // ========================================
    // ----------------------------------------
    // ---------- SERVICE HOME ----------
    if (windowWidthJq > 700) {
        $('.bl_item_masonry_dark__content > ul').masonry({
            // options
            // itemSelector: '.grid-item',
            // columnWidth: 200
            // gutter: 270,
        });
    }
    // ---------- END SERVICE HOME ----------
    // ----------------------------------------
    // ========================================
    // ---------- OTHER ----------
    // ----------------------------------------
    // ---------- POPUP TAB CHECKBOX ----------
    $('.tab_checkbox ul li').click(function () {
        $('.tab_checkbox ul li').removeClass('active');
        $(this).addClass('active');
    });

    $(".btn_open_calc_popup").click(function () {
        $('.bl_calc_popup').addClass('active');
        $('body').addClass('lock');
    });
    $(".btn_close_calc_popup").click(function () {
        $('.bl_calc_popup').removeClass('active');
        $('body').removeClass('lock');
    });

    $(".btn_open_estimate_popup").click(function () {
        $('.bl_estimate_popup').addClass('active');
        $('body').addClass('lock');
    });
    $(".btn_close_estimate_popup").click(function () {
        $('.bl_estimate_popup').removeClass('active');
        $('body').removeClass('lock');
    });

    $(".btn_close_feedback_popup").click(function () {
        $('.bl_feedback_popup').hide();
        // $('body').removeClass('lock');
    });

    $(".btn_close_review_popup").click(function () {
        $('.bl_review_popup').hide();
        // $('body').removeClass('lock');
    });
    // ---------- END POPUP TAB CHECKBOX ----------
    // ----------------------------------------
    // ---------- END OTHER ----------
    // ========================================
});