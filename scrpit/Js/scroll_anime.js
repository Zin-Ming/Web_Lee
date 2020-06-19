// JavaScript Document

/*------ lottie anime --------*/
/*------ lottie anime --------*/
/*------ lottie anime --------*/

$(window).on("load",function(){
	
	$('html , body').animate({scrollTop:0});
	

var index_leaf_anime = lottie.loadAnimation({
	
	container:document.getElementById('home_page'),
	path:'https://assets2.lottiefiles.com/packages/lf20_nNaGdk.json',
	rederer:'svg',
	loop:false,
	autoplay:false,	
	
});


var chapter01 = lottie.loadAnimation({
	
	container:document.getElementById('chapter01'),
	path:'https://assets2.lottiefiles.com/packages/lf20_ge4Z0u.json',
	rederer:'svg',
	loop:true,
	autoplay:true,	
	
});

var chapter02 = lottie.loadAnimation({
	
	container:document.getElementById('chapter02'),
	path:'https://assets1.lottiefiles.com/packages/lf20_fm1tn5.json',
	rederer:'svg',
	loop:true,
	autoplay:true,	
	
});

var chapter03 = lottie.loadAnimation({
	
	container:document.getElementById('chapter03'),
	path:'https://assets10.lottiefiles.com/packages/lf20_t9IfWI.json',
	rederer:'svg',
	loop:true,
	autoplay:true,	
	
});


var chapter04 = lottie.loadAnimation({
	
	container:document.getElementById('chapter04'),
	path:'https://assets5.lottiefiles.com/packages/lf20_Sc8BrO.json',
	rederer:'svg',
	loop:true,
	autoplay:true,	
	
});




/*------ lottie anime --------*/
/*------ lottie anime --------*/
/*------ lottie anime --------*/



var controller = new ScrollMagic.Controller();

var scroll_anime = new TimelineMax()

	.to('.index_flex' , 2 , {x:"-25%" , delay: 1})
	.to('.index_flex' , 2 , {x:"-50%" , delay: 1})
	.to('.index_flex' , 2 , {x:"-75%" , delay: 1})


var index_scroll = new ScrollMagic.Scene({
	
	triggerElement:'.index',
	
	triggerHook:'onLeave',
	
	duration:'500%'
	
})

.setPin(".index")
.setTween(scroll_anime)	
.addTo(controller);

var index_pall = new TimelineMax()
	
	.add([
			TweenMax.to(".home_page_lee" , 1 , {right: "25%"}),
			TweenMax.to(".home_page_left_moun" , 1 , {left: "5%"}),
			TweenMax.to(".home_page_left_banbom" , 1 , {left: "-5%"}),
			TweenMax.to(".home_page_right_banbom" , 1 , {right: "0%"}),
		]);

	

var index = new ScrollMagic.Scene({
	
	triggerElement:'.index',
	
	triggerHook:'onLeave',
	
	duration:'50%',
	
})

.on("enter" , function(){

	index_leaf_anime.setDirection(1);
	index_leaf_anime.play();
	$(".home_page_left_moun").addClass("fade_in");
	$(".home_page_right_moun").addClass("fade_in");
	$(".home_page_left_banbom").addClass("fade_in");
	$(".home_page_right_banbom").addClass("fade_in");
	$(".home_page_lee").addClass("fade_in");
	$(".home_text").addClass("fade_in");
	
	
})

.on("leave" , function(){
	
	index_leaf_anime.setDirection(-1);
	index_leaf_anime.play();
	
	$(".home_page_left_moun").removeClass("fade_in");
	$(".home_page_right_moun").removeClass("fade_in");
	$(".home_page_left_banbom").removeClass("fade_in");
	$(".home_page_right_banbom").removeClass("fade_in");
	$(".home_page_lee").removeClass("fade_in");
	$(".home_text").removeClass("fade_in");
})

.setTween(index_pall)
.addIndicators()
.addTo(controller);



var info_pall = new TimelineMax()
	
	.add([
			TweenMax.to(".info_page_behind" , 1 , {left: "0%", opacity:1 , delay:1}),
			TweenMax.to(".info_page_front" , 1 , {right: "0%", opacity:1, delay:1}),
			TweenMax.to(".info_page_lee" , 1 , {right: "10%" , delay:1}),
			TweenMax.to(".info_text" , 1 , {opacity:1, delay:1}),
		]);

var info = new ScrollMagic.Scene({
	
	triggerElement:'.index',
	
	triggerHook:'onLeave',
	
	duration:'250%',
	
})


.setTween(info_pall)
.addIndicators()
.addTo(controller);

var write_pall = new TimelineMax()
	
	.add([
			TweenMax.from(".write_page_behind" , 1 , {top: "-5%" , opacity:0 , delay:2}),
			TweenMax.from(".page_flex" , 1 , { opacity:0 , delay:2}),
		]);



var write = new ScrollMagic.Scene({
	
	triggerElement:'.index',
	
	triggerHook:'onLeave',
	
	duration:'400%',
	
})

.setTween(write_pall)
.addIndicators()
.addTo(controller);




var effect_pall = new TimelineMax()
	
	.add([
			TweenMax.from(".effect_page_behind" , 1 , {bottom:"-10%" , opacity:0, delay:8}),
			TweenMax.from(".effect_page_between" , 1 , {left:"10%", opacity:0, delay:8}),
			TweenMax.from(".effect_page_top" , 1 , {left:"10%", opacity:0, delay:8}),
			TweenMax.from(".effect_page_lee" , 1 , {right:"-10%", opacity:0, delay:8}),
			TweenMax.from(".effect_text" , 1 , { opacity:0, delay:8}),
		]);



var effect = new ScrollMagic.Scene({
	
	triggerElement:'.index',
	
	triggerHook:'onLeave',
	
	duration:'500%',
	
})

.setTween(effect_pall)
.addIndicators()
.addTo(controller);


$('.page01').click(function(){
	
	$('.chapter01').addClass('fade_in');
	$('.chapter').addClass('blur');
	$('.chapter_bg').addClass('fade_in');
	
});
	
$('.page02').click(function(){
	
	$('.chapter02').addClass('fade_in');
	$('.chapter').addClass('blur');
	$('.chapter_bg').addClass('fade_in');
	
});
	
$('.page03').click(function(){
	
	$('.chapter03').addClass('fade_in');
	$('.chapter').addClass('blur');
	$('.chapter_bg').addClass('fade_in');
	
});
	
$('.page04').click(function(){
	
	$('.chapter04').addClass('fade_in');
	$('.chapter').addClass('blur');
	$('.chapter_bg').addClass('fade_in');
	
});
	
	
$('.chapter_bg').click(function(){
	
	$('.chapter01').removeClass('fade_in');
	$('.chapter02').removeClass('fade_in');
	$('.chapter03').removeClass('fade_in');
	$('.chapter04').removeClass('fade_in');
	$('.chapter').removeClass('blur');
	$('.chapter_bg').removeClass('fade_in');
	
});
	
	
});
