$(document).ready(
	function(){
		/*$('#m1').click(
			function(){
				$('#duze').fadeIn(500);
				$('#d1').fadeOut(0);
				$('#d2').fadeOut(0);
				$('#d3').fadeOut(0);
				$('#d1').fadeIn(500);
			}
		);
		$('#m2').click(
			function(){
				$('#duze').fadeIn(500);
				$('#d1').fadeOut(0);
				$('#d2').fadeOut(0);
				$('#d3').fadeOut(0);
				$('#d2').fadeIn(500);
			}
		);
		$('#m3').click(
			function(){
				$('#duze').fadeIn(500);
				$('#d1').fadeOut(0);
				$('#d2').fadeOut(0);
				$('#d3').fadeOut(0);
				$('#d3').fadeIn(500);
			}
		);
		$('#zamknij').click(
			function(){
				$('#duze').slideUp(100);
			}
		);*/
		$('#menu').click(
			function(){
				//Fade Toggle (Fade in + Fade out)
				$('.kategoria').fadeToggle(500);
				$('#menu').toggleClass('active');
				$('.galeria').slideUp(100);
			}
		);
		$('#zamknij').click(
			function(){
				$('#openphoto').fadeOut(500);
			}
		);
		$('#kategoria1').click(
			function(){
				$('.galeria').slideUp(100);
				$('#galeria1').slideDown(500);
			}
		);
		$('#kategoria2').click(
			function(){
				$('.galeria').slideUp(100);
				$('#galeria2').slideDown(500);
			}
		);
		$('#kategoria3').click(
			function(){
				$('.galeria').slideUp(100);
				$('#galeria3').slideDown(500);
			}
		);
		$('#a1').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','a1.jpg');
			}
		});
		$('#a2').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','a2.jpg');
			}
		});
		$('#a3').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','a3.jpg');
			}
		});
		$('#a4').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','a4.jpg');
			}
		});
		$('#b1').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','b1.jpg');
			}
		});
		$('#b2').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','b2.jpg');
			}
		});
		$('#b3').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','b3.jpg');
			}
		});
		$('#b4').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','b4.jpg');
			}
		});
		$('#c1').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','c1.jpg');
			}
		});
		$('#c2').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','c2.jpg');
			}
		});
		$('#c3').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','c3.jpg');
			}
		});
		$('#c4').on({
			'click': function(){
				$('#openphoto').fadeToggle(500);
				$('#bigphoto').attr('src','c4.jpg');
			}
		});
	}
);