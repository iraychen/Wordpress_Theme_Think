// JavaScript Document
 $(function(){  
	  //��ȡҪ��λԪ�ؾ�������������ľ���
	  var navH = $("#side-soll").offset().top;
	  var footnah = $("#footer").offset().top;
	  var a=0;
	  $(window).scroll(function(){
		//��ȡ�������Ļ������� 
		var scroH = $(this).scrollTop();  
		//�������Ļ���������ڵ��ڶ�λԪ�ؾ�������������ľ��룬�͹̶�����֮�Ͳ��̶�
		var main = $('#postlist').height();
		var barnav = $('#sidebar').height();
		// alert(main);
		// alert(barnav);
		if(main>barnav){
		if(scroH>=navH){
			if(scroH>footnah-700){ //������ָ��������֮�� �ͻ�ÿ�����ƶ�һ������top�ͻ��1 �൱�ھ�ֹ
			//alert(1);
			     lenheig = scroH-(footnah-700);
				 $("#side-soll").css({"position":"fixed","top":(5)-lenheig});
				}else{
					$("#side-soll").css({"position":"fixed","top":5});
					} 
		}else if(scroH<navH){
			//alert(1);
			$("#side-soll").css({"position":"static","margin":"0 auto"});
		}
		console.log(scroH==navH);
		}
	   })
	  })