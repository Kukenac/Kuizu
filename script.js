var canvas = document.getElementById('canvas');
var context = getContext("2d");
var paint;

function test(){
    canvas.style.outlineStyle = dashed;
}


$('#canvas').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
		
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});

$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

$('#canvas').mouseup(function(e){
  paint = false;
});

$('#canvas').mouseleave(function(e){
  paint = false;
});

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
  context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 5;
			
  for(var i=0; i < clickX.length; i++) {		
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.stroke();
  }
}

<script src="jscolor.js"></script>

<p>Move mouse over these buttons!</p>

<button style="background:#FF9900" onclick="document.getElementById('foo')
    .jscolor.fromString('ff9900')">fromString()</button>

<button style="background:#4DE633" onclick="document.getElementById('foo')
    .jscolor.fromRGB(77, 230, 51)">fromRGB()</button>

<button style="background:#80CCFF" onclick="document.getElementById('foo')
    .jscolor.fromHSV(204, 50, 100)">fromHSV()</button>

<p><input class="jscolor" id="foo"></p>
