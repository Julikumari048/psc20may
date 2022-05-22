

function storeData(e){
   e.preventDefault();
   // console.log("function call");
let form=document.getElementById("form");
let name = form.name.value;
let unit = form.unit.value;
let studentid=form.studentid.value;
let batch =  form.batch.value;
let image = form.image.value;

let s1=new Student(name,unit,studentid,batch,image);

let arr=JSON.parse(localStorage.getItem("data"))||[];
arr.push(s1);
console.log("arr",arr);

localStorage.setItem("data",JSON.stringify(arr));
//console.log(name,course,unit,image,batch);

}

function Student(n,u,s,b,i){
    this.name=n;
    this.unit=u;
    this.studentid=s;
    this.batch=b;
    this.image=i;
  
    
}

function calculate(){
    let arr =JSON.parse(localStorage.getItem("data"))||[];

    let obj={};

    for(let i=0; i<arr.length; i++){
        if(!obj[arr[i].batch]){
       obj[arr[i].batch]=0;
    }
}

for(let i=0; i<arr.length; i++)
{
   obj[arr[i].batch]++;
}
    console.log(obj);
    
}

calculate();