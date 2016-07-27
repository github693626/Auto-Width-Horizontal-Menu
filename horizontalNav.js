(function($){
	$.fn.extend({

		horizontalNav : function(){
			var $nav = $(this),
				$navWidth = $nav.width(),
				$navLi = $nav.children('li'),
				totalWidth = 0,
				_padding = 0;

			$navLi.each(function(){
				totalWidth = totalWidth +$(this).width();
			});

			_padding = ($navWidth - totalWidth)/$navLi.length;

			$navLi.each(function(){
				$(this).width((($(this).width() + _padding)/$navWidth)*100 + "%");
			});

			return this;

		}

	});
})(jQuery);