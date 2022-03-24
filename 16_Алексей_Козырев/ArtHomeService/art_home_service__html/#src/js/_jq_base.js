// ========================================
// BASE JQ SCRIPTS
// ========================================
// ---------- ADDING A FIXED BLOCK ----------
// $(window).scroll(function () {
//     var top = $(document).scrollTop();
//     if (top > 160) {
//         $(".header__fixed").slideDown();
//     } else if (top < 160) {
//         $(".header__fixed").slideUp();
//     }
// });
// ---------- END ADDING A FIXED BLOCK ----------
// ========================================
// ---------- IMG > TO > SVG ----------
jQuery('img.svg').each(function () {
    var img = jQuery(this);
    var imgID = img.attr('id');
    var imgClass = img.attr('class');
    var imgURL = img.attr('src');
    jQuery.get(imgURL, function (data) {
        var svg = jQuery(data).find('svg');
        if (typeof imgID !== 'undefined') {
            svg = svg.attr('id', imgID);
        }
        if (typeof imgClass !== 'undefined') {
            svg = svg.attr('class', imgClass + ' replaced-svg');
        }
        svg = svg.removeAttr('xmlns:a');
        img.replaceWith(svg);
    }, 'xml');
});
// ---------- END IMG > TO > SVG ----------
// ========================================
$(document).ready(function () {
    // ========================================
    // ---------- VARIABLES ----------
    // let windowWidthBase = $(window).width();
    // ---------- END VARIABLES ----------
    // ========================================
    // ---------- HEADER ----------
    // $('.burger_btn').click(function (e) {
    //     e.preventDefault();
    //     $(this).toggleClass('active');
    //     $('.header__menu_desktop').toggleClass('active');
    //     $('body').toggleClass('lock');
    // });
    // ----- УДАЛЕНИЕ ВНЕ БЛОКА -----
    // $(document).mouseup(function (e) {
    //     var div = $(".header__menu_more > ul ");
    //     if (!div.is(e.target) // если клик был не по нашему блоку
    //         &&
    //         div.has(e.target).length === 0) { // и не по его дочерним элементам
    //         $('.header__menu_more > a').next().removeClass('active');
    //         // скрываем его
    //     }
    // });
    // ----- КОНЕЦ УДАЛЕНИЕ ВНЕ БЛОКА -----
    // ---------- END HEADER ----------
    // ========================================
    // ---------- FOOTER ----------

    // ---------- END FOOTER ----------
    // ========================================
    // ---------- OTHER ----------

    // ---------- END OTHER ----------
    // ========================================
});