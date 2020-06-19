// JavaScript Document

var write = new Vue({
	
	el:'#write',
	
	data:{
		
		show_01:false,
		show_02:false,
		show_03:false,
		show_04:false,
		
	},
	
	methods:{
		
		
		btn_show:function(number){
			
			if(number === 1){
				
				this.show_01 = true;
				
			}else if(number === 2){
				
				this.show_02 = true;	
				
			}else if(number === 3){
				
				this.show_03 = true;	
				
			}else{
				
				this.show_04 = true;
			}
			
		},
		
		
		
	},
	
	
});