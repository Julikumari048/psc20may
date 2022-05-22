append();
function append(){
let getdata=JSON.parse(localStorage.getItem("data"))||[];
let container = document.getElementById("container");
container.innerHTML=null;

getdata.map(function(el,index){
 var div=document.createElement("div");
 var img=document.createElement("img");
 img.src=el.image;

 let p = document.createElement("p");
 p.innerText = el.name;

var unit = document.createElement("p");
 unit.innerText = el.unit;
var batch = document.createElement("p");
 batch.innerText = el.batch;

 var student=document.createElement("p");
 student.innerText=el.studentid;


let btn=document.createElement("button");
btn.innerText="remove";

btn.addEventListener("click",function(){
    remove(el,index);
});

 
 div.append(img,p,unit,batch,student,btn);
 container.append(div);
 
})
};


function remove(el,index){
 var getdata=JSON.parse(localStorage.getItem("data"))||[];
 getdata.splice(index,1);
 localStorage.setItem("data",JSON.stringify(getdata));
 window.location.reload();

 //console.log(data);



 let newData=getdata.filter(function(e,i){


     if(i === index){
         let trash = JSON.parse(localStorage.getItem("trash")) || [];
         trash.push(e);
         localStorage.setItem("trash",JSON.stringify(trash));
     }
     else{
         return i!==index;
     }
 });
console.log(newData);
     
     //append()
 }

