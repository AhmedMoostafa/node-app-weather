/* const express=require('express');
const re=require('https');
console.log(express); */

const express=require('express');
const path=require('path')
const hbs=require('hbs');
const app=express();


 const pathd=path.join(__dirname,'../public')
 const viewsPath=path.join(__dirname,'../templates/views');
 const partialsPath=path.join(__dirname,'../templates/partials');
 app.use(express.static(pathd));
 app.set('view engine','hbs');
 app.set('views',viewsPath);
 hbs.registerPartials(partialsPath);
   app.get('/index',(req,res)=>{

        res.render('index',{
          title:'hi from index!!!',
          name:'ahmed mostafa'

        })
    }
 )  

 app.get('/help',(req,res)=>{

  res.render('help',{
    title:'hi from help',
    name:'ahmed mostafa'

  })
}
)  
app.get('/query',(req,res)=>{

if(!req.query.name){
 res.send('please send name ')
}
else
{
  res.send(req.query.name);
} 
  
})


//node ../web-server/src/app.js
app.get('*',(req,res)=>{

res.render('error',{
errormssg:'error not found',
title:"hi ahmed"

})

})   
app.listen(3000,()=>{

    console.log('connect on port:3000')
})