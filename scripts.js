$(document).ready(function(){
	function displayTime(){
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridiem = "AM";

		if(seconds < 10){
			seconds = "0" + seconds;
			if (seconds == ("0" + 0)){
				// $('div').css("color", "red")
				setInterval(($('div').css("color", "red")), 500)
			}else{
				$('div').css("color", "black")

			}
		};


		if(minutes < 10){
			minutes = "0" + minutes;
			if(minutes ===("0" + 0)){
				// $('div').css("color", "blue")
				setInterval(($('div').css("color", "blue")), 10000)
			}else{
				$('div').css("color", "black")
//how do i make it so that css color goes back to red when seconds is 00
			}
		}
		if(hours > 12){
			hours = hours - 12;
			meridiem = "PM"
		}
		if (hours === 0){
			hours = 12;
		}


		var clockDiv = document.getElementById('clock');
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

	}

	displayTime();
	setInterval(displayTime, 1000);

	
// 	$('.button').click(function(){
// var theTrick = $(this).attr('todo');

// }if(theTrick == "toggle"){
// 	$('.thing').toggle();
	
	// var a=1;

	// $('#myDivi'),on.('click',function(){
	// 	//Javascript remembers that a was declared.
	// 	//Keeps it available/alive because it's still needed
	// 	//The click function can access, closure
	// 	alert(a);
	// });

	// $('#myDivi'),on.('click',function(){



	// var x = 1;
	// var y = 1;
	// function a(){
	// 	x = 2; //global x becomes 2
	// 	//var y = 3 //local var, parent does NOT have access to it
	// 	y = 2 //will change the global var for y, global y = 2
	// 	function b(){
	// 		y = 4;
	// 		var x = 5; //Local var, A and global CANNOT see it 
	// 		//it has no connection at all to waht is in function a or the global var
			
	// 	}
	// }
});


