var div =document.getElementById('canvas')

//按下去鼠标
div.onmousedown =function(a){
  var x=a.clientx
  var y=a.clienty
  var divA =document.createElement('div')
  divA.style ="width:6px;height:6px;" + 
  "background:black; border-radius:3px;" +     
  "position: absolute; left: "+(x-3)+"px;"+
  "top: "+(y-3)+"px;"
 div.appendChild(divA)
   
 }

//动鼠标
div.onmousemove =function(a){
    var x=a.clientx
  var y=a.clienty
  var divA =document.createElement('div')
  divA.style ="width:6px;height:6px;" + 
  "background:black; border-radius:3px;" +     
  "position: absolute; left: "+(x-3)+"px;"+
  "top: "+(y-3)+"px;"
 div.appendChild(divA)
  
}
//松开鼠标
div.onmouseup =function(z){
  console.log(1)
}
var yyy = document.getElementById('xxx')
var context = yyy.getContext('2d')

context.fillStyle = 'red';
context.fillRect(0,0,100,100);