const express = require('express')
const pool = require('./db')
const app = express()
const port = 3000
const jwt = require('jsonwebtoken')
const bodyparser = require('body-parser')
const {body, validationResult } = require('express-validator')


app.use(bodyparser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE,GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Authorization");
    next();
})

app.get('/', async (req, res) => {
    res.send('APIs for the Collage Addmission Process.');
})

app.get('/order_tbl_data', [], async (req,res) =>{
    try{
        const rs = await pool.query('select * from order_tbl')
        res.json({status : '200', message : 'success', data : rs.rows})
    }catch(err){
        console.error(err.message)
    }
})

app.get('/order_name', [], async (req,res) =>{
    try{
        const rs = await pool.query('select * from order_name')
        res.json({status : '200', message : 'success', data : rs.rows})
    }catch(err){
        console.error(err.message)
    }
})

app.get('/customer_details', [], async (req,res) =>{
    try{
        const rs = await pool.query('select name,age,gender,order_name,order_date from order_name, order_tbl where order_name.order_id = order_tbl.item_id')
        res.json({status : '200', message : 'success', data : rs.rows})
    }catch(err){
        console.log(err.message)
    }
})


app.listen(port, () => {
    console.log(`Server Starts on Port No. http://localhost:${port}`)
})