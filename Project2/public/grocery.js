import Framework7 from 'framework7/framework7.esm.bundle';
import $$ from 'dom7';
import firebase from 'firebase/app';
import app from "./F7App.js";
import 'firebase/database';
import 'firebase/auth';

$$("#tab2").on("tab:show", () => {
    //put in firebase ref here
    const sUser = firebase.auth().currentUser.uid;
    firebase.database().ref("laptops/"+sUser).on("value", (snapshot) =>{
        const oItems = snapshot.val();
        const aKeys = Object.keys(oItems);
        console.log(aKeys);
        $$("#groceryList").html("");
        for(let n = 0; n < aKeys.length; n++){
            const sKey = aKeys[n];
            let sCard="";
          if(oItems[aKeys[n]].purchased!=null){
          sCard = ` <div class="card">
            <div class="card-content card-content-padding"><strike>${oItems[aKeys[n]].item}</strike></div>
            <div class="card-content card-content-padding"><strike>${oItems[aKeys[n]].price}</strike></div>
            <img class="card-content card-content-padding" src=${oItems[aKeys[n]].picture}>
            <button class="button" name="deleteme" id="d${sKey}">I don't need this</button>
            <button class="button" name="finishme" id="f${sKey}">I bought this</button>
            </div>
            `;
          }
            else{
            sCard = `
            <div class="card">
            <div class="card-content card-content-padding">${oItems[aKeys[n]].item} </div>
            <div class="card-content card-content-padding">${oItems[aKeys[n]].price} </div>
            <img class="card-content card-content-padding" src=${oItems[aKeys[n]].picture}>
            <button class="button" name="deleteme" id="d${sKey}">I don't need this</button>
            <button class="button" name="finishme" id="f${sKey}">I bought this</button>
            </div>
            `;
            }
            
            $$("#groceryList").append(sCard);
        }
        createDeleteHandlers();
        createFinishHandlers();
    });

});

function createDeleteHandlers(){
  const sUser = firebase.auth().currentUser.uid;
    var name = document.getElementsByName("deleteme");
     for(var n = 0; n < name.length; n++){
      name[n].addEventListener("click", (evt) =>{
       const sId = evt.target.id.substr(1); 
        console.log("clicked"+sUser+"/" +sId);
        firebase.database().ref("laptops/"+ sUser +"/"+ sId).remove();
      })
    }
  }

  function createFinishHandlers(){
    const sUser = firebase.auth().currentUser.uid;
    var name = document.getElementsByName("finishme");
  
    for(var n = 0; n < name.length; n++){
      name[n].addEventListener("click", (evt) =>{
        const sId = evt.target.id.substr(1);
        console.log("clicked"+sUser+"/" +sId);
        const sFinished =  new Date().toISOString().replace(".", "_");
        firebase.database().ref("laptops/"+ sUser +"/"+ sId+"/purchased").set(sFinished);
      })
    }
  }


$$(".my-sheet").on("submit", e => {
    //submitting a new note
    e.preventDefault();
    const oData = app.form.convertToData("#addItem");
    const sUser = firebase.auth().currentUser.uid;
    const sId = new Date().toISOString().replace(".", "_");
    firebase.database().ref("laptops/" + sUser + "/" + sId).set(oData);
    app.sheet.close(".my-sheet", true);
});


