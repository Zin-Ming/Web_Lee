// JavaScript Document

var write = new Vue({
	
	el:'#write',
	
	data:{
		
		title:'',
		
		p1:'',
		p2:'',
		p3:'',
		p4:'',
		
	},
	
	methods:{
		
		
		btn_show:function(number){
			
			if(number === 1){
				
				this.title = '錦瑟';
				
				this.p1 = '錦瑟無端五十弦，一弦一柱思華年。';
				this.p2 = '庄生曉夢迷蝴蝶，望帝春心托杜鵑。';
				this.p3 = '滄海月明珠有淚，藍田日暖玉生煙。';
				this.p4 = '此情可待成追憶，只是當時已惘然。';
				
				
			}else if(number === 2){
				
				this.title = '夜雨寄北';
				
				this.p1 = '君問歸期未有期，';
				this.p2 = '巴山夜雨漲秋池。';
				this.p3 = '何當共剪西窗燭，';
				this.p4 = '卻話巴山夜雨時。';
					
				
			}else if(number === 3){
				
				this.title = '無題';
				
				this.p1 = '相見時難別亦難，東風無力百花殘。';
				this.p2 = '春蚕到死絲方盡，蜡炬成灰淚始干。';
				this.p3 = '曉鏡但愁云鬢改，夜吟應覺月光寒。';
				this.p4 = '蓬山此去無多路，青鳥殷勤為探看。';
				
			}else{
				
				this.title = '悼傷後赴東蜀辟至散關遇雪';
				
				this.p1 = '劍外從軍遠，';
				this.p2 = '無家与寄衣。';
				this.p3 = '散關三尺雪，';
				this.p4 = '回夢舊鴛机。';
				
			}
			
		}
		
	},
	
	
});