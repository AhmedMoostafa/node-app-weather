
const form=document.querySelector('form');
const search =document.querySelector('#in')
form.addEventListener('submit',(e)=>{
const location=search.value;
const box=document.querySelector('#data')
e.preventDefault();
//console.log(location); 
      box.textContent='loading....';
               fetch('http://localhost:3000/weather?location='+location).then((res)=>{

              res.json().then((data)=>{
                if(data.error)
                {
                  box.textContent=data.error;
                }
                else
                {
                  box.textContent=data.data;
                }
              
                
              });
              }) 
 

}) 