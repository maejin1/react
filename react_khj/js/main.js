
  $(".event").slick({
    autoplay:true,
    dots:true,
    infinite:true,
    autoplaySpeed:3000
  });

  
		$("#menu>li>a").mouseenter(function(){      
			$(".tmenu").stop().slideUp(500);         //sub는 몽땅 내리고~!!!
			$(this).next().stop().slideDown(500);     //선택한 것의 다음요소!!
		});
		
		// -----------------find로 해보기---------------------------------

		$("#menu>li").mouseleave(function(){
			$(this).find(".tmenu").stop().slideUp(500);
		})


  