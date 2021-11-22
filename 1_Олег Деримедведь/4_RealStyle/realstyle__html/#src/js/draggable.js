(function($) {
    var els = $('.entry');
    $.fn.drags = function(opt) {

        opt = $.extend({ handle: "", cursor: "move" }, opt);

        if (opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
            if (opt.handle === "") {
                var $drag = $(this).addClass('draggable2');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable2');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
                $('.draggable2').offset({
                    top: e.pageY + pos_y - drg_h,
                    left: e.pageX + pos_x - drg_w
                }).on("mouseup", function() {
                    $(this).removeClass('draggable2').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function() {
            if (opt.handle === "") {
                $(this).removeClass('draggable2');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable2');
            }
        });

    };

    function over() {
        var _this = $(this);

        els.addClass('dim-hide');
        _this.removeClass('dim-hide')
        _this.addClass('dim-over');

        _this.on("mouseout", function() {
            _this.removeClass('dim-over');
            els.removeClass('dim-hide');
        });
    };

    els.mouseover(over);
    els.drags();
})(jQuery);