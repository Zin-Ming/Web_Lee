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