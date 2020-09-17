/* const express=require('express');
const re=require('https');
console.log(express); */


const express=require('express');
const path=require('path')
const hbs=require('hbs');
const app=express();
const getData=require('./getData');

 const pathd=path.join(__dirname,'../public')
 const pathd2=path.join(__dirname,'../src')
 const viewsPath=path.join(__dirname,'../templates/views');
 const partialsPath=path.join(__dirname,'../templates/partials');

 app.use(express.static(pathd));
 app.use(express.static(pathd2));
 
 app.set('view engine','hbs');
 //hbs file
 app.set('views',viewsPath);
 //partials
 hbs.registerPartials(partialsPath);

 const port=process.env.PORT||3000;
app.get('/weather',(req,res)=>{

    if(!req.query.location)
    {
        res.send({error:'empty'})
    } else
    {
        getData(req.query.location,(error,data)=>{
            if(error)
            {
                res.send({error})
            }
            else
            {
              res.send({
                data:data
            });
        
            } 
          
        })
    } 

}) 
app.get('',(req,res)=>{

    res.render('index',{
      title:'Enter your city name',
      name:'ahmed mostafa'

    })
}
)
app.get('*',(req,res)=>{

    res.render('error',{
    errormssg:'error not found',
    title:"hi ahmed"
    
    })
    
    })     
app.listen(port,()=>{

    console.log('connect on port:'+port)
})