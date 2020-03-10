function addTodo(newdo){
    let op=document.createElement("p");
op.innerHTML=`${newdo}`;
document.getElementById("todos").prepend(op);
}

document.getElementById("todo").addEventListener("submit",(evt)=>{
evt.preventDefault();
let newn =document.getElementById("newdo").value;
addTodo(newn);

});
