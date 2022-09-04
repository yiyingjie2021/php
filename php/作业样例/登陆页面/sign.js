var ipt1=document.querySelector(".ipt1");
var ipt2=document.querySelector(".ipt2");
var button=document.querySelector("button");
var p2=document.querySelector(".p2");
button.addEventListener("click",function(){
   if(ipt1.value!="yiyingjie"&&ipt2.value!="202011265"){
    p2.innerHTML="账户或密码错误，请输入正确的账户或密码";
    p2.style.display="block";
   }
   
})
