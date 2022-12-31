// Selecting Elements
const previewContainer=document.getElementById("share--preview");
const openBtn=document.getElementById("share--open");
openBtn.addEventListener("click",()=>{
   previewContainer.classList.toggle("show")
});