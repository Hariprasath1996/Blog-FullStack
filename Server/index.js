import express from "express";
const app = express()

app.get("/" ,(req,res)=>{
res.send("<h1>Blogger App</h1>")
})

app.listen(5000,(req,res)=>{
console.log(`server running in : http://localhost:5000`);
})
