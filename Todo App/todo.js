let addButton=document.querySelector('#input-items');
let datebutton=document.querySelector('#date-input');

let addeditems=[
       
];
display();
function getvalue(){
  let valueInput= addButton.value;
  let dateinput=datebutton.value;
  addeditems.push(
   {
   'addinput':valueInput,
   'dateinput':dateinput
}
  );
  display();
}

function display(){
   let htmlelement='';
 for(let i=0;i<addeditems.length;i++){
   let parent = document.querySelector(".addeditemscontainer");

   htmlelement+=`<span>${addeditems[i].addinput}</span>
   <span>${addeditems[i].dateinput}</span>
   <button onclick="addeditems.splice(${i},1); 
   display();" class="delete-button">Delete</button/>
    `; 
    parent.innerHTML=htmlelement;
addButton.value='';
datebutton.value='';       
}

}