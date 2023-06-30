const express = require('express');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
/*const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');*/
global.fetch = require('node-fetch');

const poolData = {    
    UserPoolId : "us-east-2_TDs2jXaZQ", // Your user pool id here    
    ClientId : "3njbofgfvv2bk7pftlffsdd189" // Your client id here
    }; 
const pool_region = 'us-east-2';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    console.log("JSON:" + JSON.stringify(req.body));
 
    var attributeList = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value:req.body.email}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"password",Value:req.body.password}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"nombre",Value:req.body.nombre}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"apellido",Value:req.body.apellido}));
    /*attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"gender",Value:"male"}));*/
    /*attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"birthdate",Value:"1991-06-21"}));*/
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"direccion",Value:req.body.direccion}));
    /*attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value:"+5412614324321"}));*/
    

    userPool.signUp(req.body.email, req.body.password,req.body.nombre,req.body.apellido,req.body.direccion, attributeList, null, function(err, result){
        if (err) {
            console.log(err);
            res.json(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        res.json({
            bienvenido: `${cognitoUser.getUsername()}`
        })
    });
   
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
