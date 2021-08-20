const express = require('express');
const jwt = require('jsonwebtoken');


const app = express() ;

app.get('/api', (req,res) =>{

    res.json({
        message: 'Welcome to API'

    });
});



app.get('/api/posts', verifyToken, (req,res) =>{
    jwt.verify(req.token, 'secreykey', { expiresIn:'30s'}, (err, authData) => {
        if(err){

            res.sendStatus(403);
        }else{
    res.json({
        message: 'Post created',
        authData

    });

        }

    });

});


app.post('/api/login', (req,res) => {

    //Mock user

    const user = { 
        id: 1,
        username: 'clement',
        email: 'clement.abs@gmail.com'

    }

   jwt.sign({user},'secretkey', (err,token)=> {
   
   res.json({

       
    token
    
   });

   });
   
});


function verifyToken(req,res, next){

    const bearHeader = req.headers['authorization'];

    if(typeof bearHeader != 'undefined'){

        const bearer = bearHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
    } else {


    }


}

app.listen(5000,() => console.log('Server started on port 5000'));





