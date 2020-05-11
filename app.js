console.log("we are in JS");
showNotes();
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener('click',function(e){
    let addtitle=document.getElementById('addtitle');
    let addtxt=document.getElementById('addtext');
    let notes=localStorage.getItem('notes');
    if(notes==null)
      notesObj=[];
    else
      notesObj=JSON.parse(notes);
    let obj={
      title:addtitle.value,
      content:addtxt.value
    }  
    notesObj.push(obj);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addtxt.value='';
    addtitle.value='';
     showNotes();
});

function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null)
      notesObj=[];
    else  
      notesObj=JSON.parse(notes);
    let html='';
    notesObj.forEach(function(element,index) {
        html+=`
        <div class="mynote card my-2 mx-2" style="width: 18rem;height:20rem">

            <div class="card-head">
               <h5 class="card-title">${element.title}</h5>
            </div>
               <div class='card-text-container'>
                  <p class="card-text">${element.content}</p>
               </div>
              <div id="btnContainer">
                <button id="${index}" onclick='deleteNote(this.id)' class="btn delete btn-primary">Delete Note</button>
              </div>
          </div>
  
     `;
    });
    
    let noteselm=document.getElementById('notes');
    if(notesObj.length!=0)
     noteselm.innerHTML=html;
    else 
     noteselm.innerHTML=`NO notes Available,Please add a Note Using "ADD NOTE BUTTON"`;
}
//function to delete a note
function deleteNote(index)
{
    let notes=localStorage.getItem('notes');
    if(notes==null)
      notesObj=[];
    else  
      notesObj=JSON.parse(notes);
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
}