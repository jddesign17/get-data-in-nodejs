const express = require('express')
const app = express()
const cors = require("cors")

app.use(cors())

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 
}
  
app.get('/get', cors(corsOptions),async(req,res)=>{

   try
   {
    const users = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 }
      ];

    res.send(users)
   }
   catch(err)
   {
    res.send("not cors")
   }
})



app.listen(5000,()=>console.log("port is Runnig"))