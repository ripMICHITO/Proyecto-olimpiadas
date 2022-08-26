canvas=document.getElementById("myCanvas") ;
ctx=canvas.getContext("2d") ;
ctx.beginPath() ;
ctx.strokeStyle="blue"
ctx.lineWidth="7"
ctx.arc(400,260, 60, 0,2*Math.PI)
ctx.stroke() ;

ctx.beginPath() ;
ctx.strokeStyle="black"
ctx.lineWidth="7"
ctx.arc(500,260, 60, 0,2*Math.PI)
ctx.stroke() ;

ctx.beginPath() ;
ctx.strokeStyle="red"
ctx.lineWidth="7"
ctx.arc(600,260, 60, 0,2*Math.PI)
ctx.stroke() ;

ctx.beginPath() ;
ctx.strokeStyle="yellow"
ctx.lineWidth="7"
ctx.arc(450,360, 60, 0,2*Math.PI)
ctx.stroke() ;

ctx.beginPath() ;
ctx.strokeStyle="green"
ctx.lineWidth="7"
ctx.arc(550,360, 60, 0,2*Math.PI)
ctx.stroke() ;

