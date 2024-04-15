
const itens = document.querySelector("#menu_itens"); 

function clickMenu(){
   
   if(itens.style.display == 'block'){
    itens.style.display = 'none';
   } else{
    itens.style.display = 'block'; 
   }
   
}