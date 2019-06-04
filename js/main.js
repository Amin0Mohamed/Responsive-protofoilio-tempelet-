// JavaScript Document

let nav=document.getElementById('nav');

function changeColor() {
    "use strict";
    
    if(document.body.scrollTop>=300){
        nav.style.backgroundColor='rgba(255,255,255,0.5)';
    }else if(document.body.scrollTop<300){
        nav.style.backgroundColor='rgba(0,255,255,0.5)';
    }
       
//       nav.style.color='rgba(255,0,255,1)';
       
}
