canvas=document.getElementById("myCanvas");
x=canvas.getContext("2d");
color="red";
x.beginPath();
x.strokeStyle=color;
x.lineWidth=2;
x.arc(200,200,40,0,2*Math.PI);
x.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
console.log(color);
mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;
console.log("X = " + mouse_x + " ,Y = " + mouse_y);
circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y){
    x.beginPath();
x.strokeStyle=color;
x.lineWidth=2;
x.arc(mouse_x,mouse_y,40,0,2*Math.PI);
x.stroke();
}