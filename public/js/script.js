var size;
var brush = document.getElementById("size");
    // res = document.getElementById("demo4");

brush.addEventListener("input", function() {
    // res.innerHTML =  + p.value;
    size = brush.value;
    document.getElementById('sizeDemo').innerHTML = size;
}, false);

// var theInput = document.getElementById("myColor");
var theColor;   /*= theInput.value; */
var canvas = document.getElementById('drawCanvas');
var context = canvas.getContext('2d');
var down;
var posx;
var posy;


canvas.addEventListener("mousemove", moveExecute, false);
canvas.addEventListener("mousedown", downExecute, false);
canvas.addEventListener("mouseup"  , upExecute, false);
canvas.addEventListener("mouseout" , outExecute, false);
// theInput.addEventListener("input", changeColor,false);

function changeColor(){
	// document.getElementById("demo3").innerHTML = theInput.value;
	// theColor = theInput.value;
	context.strokeStyle= theColor ;
}
//default show 1
function downExecute(){
	// document.getElementById('demo').innerHTML = "mouse is clicked";
	down = true;
	startLine();
}

function moveExecute(){
//if  mouse button clicked down & moving => show 2
	if (down ==true) {
		var pos = getMousePos(canvas, event);
    	posx = pos.x -10;
    	posy = pos.y -10;
		// document.getElementById('demo2').innerHTML = "Pointer location("+posx+","+ posy+ ")";
		endLine();
	}
}

function upExecute(){
	//if mouse button unclicked	=> show 1 again
	down = false;
	// document.getElementById('demo').innerHTML = "mouse is not clicked";
	posy = undefined;
	posx = undefined;
}

function outExecute(){
	//do the same as upExecute function
	down = false;
	// document.getElementById('demo').innerHTML = "mouse is not clicked";
	posy = undefined;
	posx = undefined;
}

//================================insert start

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
}
//================================insert end

function startLine(){
	context.beginPath();
	context.lineCap="round";
	context.lineJoin= "round";
	context.lineWidth = size;
	changeColor(); // Green path
	context.moveTo(posx, posy);

}

function endLine(){
	context.lineTo(posx,posy);
	context.stroke(); // Draw it
}


//==================================================buttons

function clickMe(e){
	    // alert("You have clicked button id = "+e.id+" and button value = "+ document.getElementById(e.id).value);
	    theColor = document.getElementById(e.id).value;
	    // document.getElementById("demo3").innerHTML = theColor;
	    // document.getElementById(e.id).style.border = " 2px solid black";
	    var cursorColor = document.getElementById('drawCanvas');

	    if 	(e.id == "red") {
	    	cursorColor.style.cursor = "url('./public/images/marker_red_small.png') 6 26, pointer";
	    }
	    else if (e.id == "orange") {
	    	cursorColor.style.cursor = "url('./public/images/marker_orange_small.png') 6 26, pointer";
	    }
	    else if (e.id == "yellow") {
	    	cursorColor.style.cursor = "url('./public/images/marker_yellow_small.png') 6 26, pointer";
	    }
	    else if (e.id == "pink") {
	    	cursorColor.style.cursor = "url('./public/images/marker_pink_small.png') 6 26, pointer";
	    }
	    else if (e.id == "green") {
	    	cursorColor.style.cursor = "url('./public/images/marker_green_small.png') 6 26, pointer";
	    }
	    else if (e.id == "blue") {
	    	cursorColor.style.cursor = "url('./public/images/marker_blue_small.png') 6 26, pointer";
	    }
	    else if (e.id == "purple") {
	    	cursorColor.style.cursor = "url('./public/images/marker_purple_small.png') 6 26, pointer";
	    }
	    else if (e.id == "black") {
	    	cursorColor.style.cursor = "url('./public/images/marker_black_small.png') 6 26, pointer";
	    }

}
