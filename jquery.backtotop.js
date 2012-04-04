;(function( $, window, document, undefined ) {
	var pluginName = 'backtotop',
		defaults = {
			backToTopTxt: "back to top"
		};

	function Plugin( element, options ) {
		this.element = element;

		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype.init = function () {
		$backToTopEle = $(this.element);
        $backToTopEle.text(this.options.backToTopTxt)
            .attr("title", this.options.backToTopTxt)
            .click(function () {
                $("html, body").animate({ scrollTop: 0 }, 120);
            }), 
        $backToTopFun = function () {
            var st = $(document).scrollTop(), 
                winh = $(window).height();
            (st > 0) ? $backToTopEle.show() : $backToTopEle.hide();

            //IE6 positioning
            if (!window.XMLHttpRequest) {
                $backToTopEle.css("top", st + winh - 166);
            }
        };

        $(window).bind("scroll", $backToTopFun);
    	$(function () { $backToTopFun(); });

	};

	$.fn[pluginName] = function (options) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName,
				new Plugin(this, options));
			}
		});
	}

})( jQuery, window, document );