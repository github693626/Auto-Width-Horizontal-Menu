# Auto-Width-Horizontal-Menu

##載入

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      <script src="horizontalNav.js"></script>

##HTML

      	<nav class="nav">
      		<ul id="nav">
      			<li><a href="#">Item1</a></li>
      	        <li><a href="#">Item2</a></li>
      	        <li><a href="#">ItemItemItem3</a></li>
      	        <li><a href="#">Item4</a></li>
      	        <li><a href="#">ItemItemItemItemItemItemItem5</a></li>
      		</ul>
      	</nav>	


##CSS

    		.nav ul { list-style-type: none; padding: 0; margin: 0; background:#efefef; border-radius:4px; overflow:auto; }
    		.nav ul>li{ float:left;}
    		.nav ul>li>a{ display:block; color:#555; padding:10px 0; text-align:center; }
    		a{ text-decoration: none; }

##JS

      $(function(){
      	$("#nav").horizontalNav();
      });

##horizontalNav.js

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
