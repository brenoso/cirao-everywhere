(function() {
	//nCirao 
	var main = function($) { 
		
		var self = $.nCirao = new function(){};
		
		$.extend(self, {
			nCiraoImgs : [
			'https://i.imgur.com/hcjIuId.jpg',
			'https://i.imgur.com/fzKBTIl.jpg',
			'https://i.imgur.com/A9zEEDA.jpg',
			'https://i.imgur.com/2nK7TOZ.jpg',
			'https://i.imgur.com/8UTfTIi.jpg',
			'https://i.imgur.com/bEGY71n.jpg',
			'https://i.imgur.com/2Uh27rz.jpg',
			'https://i.imgur.com/ZDG7r7q.jpg',
			'https://i.imgur.com/3KXBN3z.jpg',
			'https://i.imgur.com/dFnpyIy.jpg',
			'https://i.imgur.com/ZIVSmxp.jpg',
			'https://i.imgur.com/31E6GaQ.jpg',
			'https://i.imgur.com/W10d8CP.jpg',
			'https://i.imgur.com/SmdQtom.jpg',
			'https://i.imgur.com/vITAoNN.jpg',
			'https://i.imgur.com/P3KYR3e.jpg',
			'https://i.imgur.com/YGsorRC.jpg',
			'https://i.imgur.com/WUiWiUD.png',
			'https://i.imgur.com/nxk5zHp.jpg',
			'https://i.imgur.com/dm02HWp.jpg',
			'https://i.imgur.com/UtlH8yM.jpg',
			'https://i.imgur.com/8T0Z1WW.jpg',
			'https://i.imgur.com/ULJJYz3.jpg',
			'https://i.imgur.com/pt4BIO0.jpg',
			'https://i.imgur.com/nEKURpI.jpg',
			'https://i.imgur.com/AEse1GB.jpg',
			'https://i.imgur.com/VHwPIFq.jpg',
			'https://i.imgur.com/8v7FPTk.jpg',
			'https://i.imgur.com/SvkQ7JA.jpg',
			'https://i.imgur.com/L8iMZuq.jpg',
			'https://i.imgur.com/ktwk23E.jpg',
			'https://i.imgur.com/45PW3J0.jpg',
			'https://i.imgur.com/pmAO8pk.jpg',
			'https://i.imgur.com/yzkDoXr.gif',
			'https://i.imgur.com/WK209Gw.jpg',
			'https://i.imgur.com/QjdzzFS.jpg',
			'https://i.imgur.com/znC8ilx.jpg',
			'https://i.imgur.com/UgzcD5b.jpg',
			'https://i.imgur.com/J4SZyNB.jpg',
			'https://i.imgur.com/AbYMlH7.jpg',
			'https://i.imgur.com/kfrBbWx.png'
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nCiraoImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 