$(document).ready(function(){

	$('.pop i').click(function(){
		$('.popup').hide(500);
	});

	$('.button button').click(function(){
		$('.pop p:first').hide(500);
	});

	$('.ul #hide_button').click(function(){
		$('.ul ul li:first-child').hide(500);
	});

	$('.test button').click(function(){
		$(".test p[class!='jac_2']").remove();
	});

	// $('.test').mousedown(function(){
	// 	$('h1').hide();
	// });
	// $('.test').mouseup(function(){
	// 	$('h1').show(500);
	// $('.test').on('mousedown', function(){
	// 	$('h1').hide();
	// });

	$('.test').on({
		mousedown: function(){
			$('.test h1').hide();
		},
		mouseup: function(){
			$('.test h1').show()
						 .css('color','red');
		}

	});

	// $('input').on({
	// 	focus: function(){
	// 		$(this).val('focus');
	// 	},
	// 	blur: function(){
	// 		$(this).val('')
	// 				.css('backgroundColor', 'green');
	// 	}
	// });

	// $('.form button').click(function(){
	// 	$('.form form').fadeOut(2000);
	// });

	$('.form button').click(function(){
		$('.form form').fadeTo(500, 0.2);
	});


	// $('.box h1').click(function(){
	// 	$('.about').slideToggle(500);
	// });

	
// callback
$('.box h1').click(function(){
	$('.about').stop(true).slideDown(500, function(){
		alert('on');
	});
});

//animate
// $('.box').click(function(){
// 	$(this).animate({
// 		marginLeft: '20px',
// 		width: '300px'
// 	}, 1000, function(){
// 		$(this).css('backgroundColor', 'red');
// 	});
// });

//queue.....
	
	$('.box').click(function(){
		let div = $('.box');

		div.animate({ marginLeft: '20px' }, 1000)
			.animate({ width:  '300px' }, 1000 , function(){
			div.css('backgroundColor', 'red')
		});
	});

	$('.stop').click(function(){
		$('.box').stop(true, false); // egolo value defult false thake .
	});

	

	// DOM ......

	$('.dom').click(function(){
		let storeItem = '';
		storeItem = $('.box-1 h1').html();
		console.log(storeItem);
	});


	// jquery form field get...

	$('input[type="submit"]').click(function(e){
		e.preventDefault();

		let firstName = '',
			lastName = '',
			userName = '',
			passWord = '';
		firstName = $('#fname').val();
		lastName = $('#lname').val();
		userName = $('#uname').val();
		passWord = $('#password').val();

		// console.log(firstName);
		// console.log(lastName);
		// console.log(userName);
		// console.log(passWord);

		//set value table...
		$('.table tbody #first').text(firstName);
		$('.table tbody #last').text(lastName);
		$('.table tbody #user_name').text(userName);
		$('.table tbody #pass').text(passWord);

	});

	// get attribute value..
	let attrVal = $('.jabi form').attr('action');
	console.log(attrVal);

	// set attribute value method 1..

	// let attrSet = $('.anchur a').attr('href', 'http:/www.facebook.com')
	// 							.attr('target', '_blank');
	// console.log(attrSet);
	 
	// set attribute value method 2..
	let attrSet =$('.anchur a').attr({
		'href': 'http:/www.facebook.com',
		'target': '_blank'
	});

	// set value callback function..
	$('.anchur h1').text(function(elementIndex, originalText){
		return originalText + ' Bangladesh';
	});

	//
	let itemH3 = '<h3>District: Naogaon</h3>';
		banner = '<h1>Bangladesh Good Country</h1>';
		before = '<div class="before"> \
					<h1>HI</h1>\
				 </div>'
		after = '<div class="before"> \
					<h1>Good By</h1>\
				 </div>'
	$('.anchur').append('<h2>I Am Habibur Rahman</h2>')
				.append(itemH3)
				.prepend(banner)
				.before(before)
				.after(after)

	// categorie add....
	$('.cat_container .cat button').click(function(){
		let lastCatNum = $('.cat_box:last').attr('cat_number');
			newCatNum = Number(lastCatNum) + 1;
			newCatBox = '<div class="cat_box" cat_number="'+ newCatNum +'"> \
							<input type="text" name="categorie" id="categorie" placeholder="categorie name"> \
							<i class="fa-regular fa-circle-xmark" remove-num="'+ newCatNum +'"></i> \
						</div>'
		
		$('.cat_container form').append(newCatBox);
	});	
// remove cat.....
	$('body').on('click', 'i', function(){
		let removeItem = $(this).attr('remove-num');
		$('[cat_number="'+ removeItem +'"]').remove();

	})	


	
	// remove.....
	$('#rem').click(function(){
		$('.remove .remove_2 h1').remove('#test');
	});

	// Accordion.......
	$('.acrdn_heading').click(function(){

		if($(this).hasClass('active')){
			return;
		}

		// exit open item..
		let activeHdAttr = $('.active').attr('acrdn_name');
		$('.active').removeClass('active');
		$('[acrdn_content="'+ activeHdAttr +'"]').slideUp(500);
		
		// open item...
		let headingAttr = $(this).attr('acrdn_name');
		$(this).addClass('active');
		$('[acrdn_content="'+ headingAttr +'"]').slideDown(500);

		
	})



}); // ready function end....