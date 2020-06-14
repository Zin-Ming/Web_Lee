// JavaScript Document
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
			TweenMax.to(".index_lee_img" , 1 , {right: "15%"}),
		]);



var index = new ScrollMagic.Scene({
	
	triggerElement:'.index',
	
	triggerHook:'onLeave',
	
	duration:'50%',
	
})

.setTween(index_pall)
.addIndicators()
.addTo(controller);



var info_pall = new TimelineMax()
	
	.add([
			TweenMax.to(".index_lee_img2" , 1 , {right: "15%", delay:2}),
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
			TweenMax.to(".index_lee_img3" , 1 , {right: "15%", delay:4}),
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
			TweenMax.to(".index_lee_img4" , 1 , {right: "15%", delay:8}),
		]);



var effect = new ScrollMagic.Scene({
	
	triggerElement:'.index',
	
	triggerHook:'onLeave',
	
	duration:'500%',
	
})

.setTween(effect_pall)
.addIndicators()
.addTo(controller);



