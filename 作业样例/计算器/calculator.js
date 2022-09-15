var show=document.querySelector(".show");
var keyboard=document.querySelector(".keyboard");
keyboard.onclick=function(event){
    var btn=event.target;
    console.log(1);
    if(btn.className.indexOf('b')!=0){
        return ;
    }
    if(btn.innerHTML=="C"){
        show.innerHTML="";
    }
    else if(btn.innerHTML=='='){
        show.innerHTML=eval(show.innerHTML);
    }else{
        show.innerHTML+=btn.innerHTML;
    }
}