import config from "./firebase.js";
import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp(config);
firebase.database().ref("todos").on("value",(snapshot)=>{

const oTodos=snapshot.val();
let aTodos=Object.keys(oTodos)
document.getElementById("todos").innerHTML="";
for(let n =0;n<aTodos.length;n++){
    const sTodo=oTodos[aTodos[n]]["name"];
    addTodo(aTodos[n],sTodo);
}
});

function addTodo(sId,sNewTodo){
    let oParagraph = document.createElement("p");
    oParagraph.innerHTML=`<button id="fin_${sId}" class="finished">fin</button><button id="del_${sId}" class="delete">X</button> &nbsp ${sNewTodo}`;
   document.getElementById("todos").prepend(oParagraph);
    
}


document.getElementById("todoForm").addEventListener("submit",
(evt) =>{
    evt.preventDefault();
    let oNewTodo = document.getElementById("newTodo");
    let sNewTodo = oNewTodo.value;
    oNewTodo.value = "";
    addTodo(sNewTodo);
    const sId=new Date().toISOString().replace('.','_');
    const sPath="todos/"+sId;
    firebase.database().ref(sPath).set({
        name:sNewTodo
    });
});
function hasClass(elem,className){
    return elem.classList.contains(className);
}

document.getElementById("todos").addEventListener("click",(evt)=>{
    if(hasClass(evt.target,"delete")){
        alert("delete clicked");
        firebase.database().ref("todos/"+evt.target.id.replace("del_","")).remove();
    }
    else if(hasClass(evt.target,"finished")){
    alert("button clicked");
    }
});