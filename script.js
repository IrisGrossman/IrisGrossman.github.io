const pixelCanvas = $('#pixelCanvas');
const tableHeight = $('#inputHeight');
const tableWidth = $('#inputWeight');
function makeGrid() {
    for (let r = 0; r < tableHeight.val(); r++){
        pixelCanvas.append("<tr></tr>");
    for (let c = 0; c < tableWidth.val(); c++) {
      pixelCanvas.children().last().append("<td></td>");
		}
	}
}

const colorPicker = $('#colorPicker');
pixelCanvas.on("click" , "td" , function(){
	  $(this).css("background-color" , colorPicker.val());
});

pixelCanvas.on("contextmenu", "td", function() {
  	$(this).css("background-color", "#ffffff");
	   	return false;
});

let mouseLock = false;
pixelCanvas.on("mousedown", "td", function() {
	  mouseLock = true;
	  $(this).css("background-color", colorPicker.val());
});

pixelCanvas.on("mouseenter", "td", function() {
	  if (mouseLock) { 
	  	$(this).css("background-color", colorPicker.val()); 
	}
});

$('body').on("mouseup", function() {
	  mouseLock = false;
});

$('form').submit(function(e) {
  	pixelCanvas.empty();
  	e.preventDefault();
	  makeGrid();
});

$('#clear').click(function() {
	pixelCanvas.empty();
	colorPicker.val("#00ffe4");
	tableHeight.val(10);
	tableWidth.val(10);
	makeGrid();
});