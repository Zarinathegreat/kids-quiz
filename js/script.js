$(document).ready(function() {
	/*$('#get_started').click(function (){
	$('#lion').addClass('magictime slideRight');
	$('#zebra').addClass('magictime slideLeft');
	$('#mouse').addClass('magictime tinDownOut');
   	});*/
	$("#get_started").click(function() {
    $('html,body').animate({
        scrollTop: $(".section2").offset().top},
        'slow');
});
	
		$(".fixed-size").click(function(){
		$(".fixed-size").draggable();
	});
		
var $animals = $('.animals');
	$animals.waypoint(function(direction){
		if (direction =='down'){
	$animals.addClass('magictime spaceInUp');
			} else {
	$animals.removeClass('magictime spaceInUp');	
			}
	}, {offset: '70%'});

	/*MONKEY ACTIVATION*/
	var $chimp = $('.chimp');
	$chimp.waypoint(function(){
	$chimp.addClass('js-chimp-animate');
		}, {offset: '60%'});
	
	/*BANANA ACTIVATION*/
	var $banana1 = $('.banana1');
	$banana1.waypoint(function(){
		$banana1.addClass('magictime vanishIn');
		}, {offset:'60%'});
	
	var $banana2 = $('.banana2');
	$banana2.waypoint(function(){
		$banana2.addClass('magictime vanishIn');
		}, {offset:'60%'});
	
		var $banana3 = $('.banana3');
	$banana3.waypoint(function(){
		$banana3.addClass('js-banana-animate');
		}, {offset:'60%'});
	});
	
	/*COUNTING GAME*/
	
	var correctCards = 0;
    $(init);

function init() {
	//HIDE THE SUCCESS MESSAGE
	$('#successMessage').hide();
	$('#successMessage').css ({
		left:'580px',
		top:'250px',
		width:0,
		height:0
	});
	
	//RESET THE GAME
	correctCards = 0;
	$('#cardPile').html( '' );
	$('#cardSlots').html('');
	
	//CREATE THE PILE OF SHUFFLED CARDS
	var numbers =[1,2,3,4,5,6,7,8,9,10];
	numbers.sort(function(){
	return Math.random() - .5});
	
 	for (var i  = 0; i < 10; i++){
		$('<div>' + numbers[i] + '</div>').data('number', numbers[i]).attr('id', 'card' + numbers[i]).appendTo('#cardPile').draggable({
		containment: '#content',
		stack: '#cardPile div',
		cursor: 'move',
		revert: true
		});
	}
	//CREATE THE CARD SLOTS
	var words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
	for (var i = 1; i < 10; i++){
		$('<div' + words[i] + '</div>').data('number', i).appendTo('#cardSlots').droppable({
		accept:'#cardPile div',
		hoverClass: 'hovered',
		drop:handleCardDrop
		});
	}
	
	function handleCardDrop(event,ui){
		var slotNumber = $(this).data('number');
		var cardNumber = ui.draggable.data('number');
		
		//drop to the correct slot
		//change the colour, position it directly on top of the slot
		// prevent it being dragged again
		
		if(slotNumber == cardNumber){
			ui.draggable.addClass('correct');
			ui.draggable.draggable('disable');
			$(this).droppable('disable');
			ui.draggable.position({of:$(this), my:'left top', at:'left top'});
			ui.draggable.draggable('option', 'revert', false);
			correctCards++;
		}
		
		//IF ALL THE CARDS'VE BEEN PLACED CORRECTLY
		//DISPLAY THE MESSAGE & RESET
		if(correctCards == 10){
			$('#successMessage').show();
			$('#successMessage').animate( {
				left:'380px',
				top:'200px',
				width:'100px',
				opacity: 1
			});
		}
		
	}
	
}




