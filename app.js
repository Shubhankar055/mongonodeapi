const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Api",{useNewUrlParser: true, useUnifiedTopology: true})

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    age:{
        type: Number
    }
})

const User = mongoose.model("User",userSchema)

app.get("/",async(req,res) => {
    
    const user = await User.find()
    res.json(user)

})

app.post("/",(req,res) =>{
    Name = req.body.name,
    age = req.body.age

    console.log(Name)

    const user = new User({
        name: Name,
        age: age // ununderstandable
    })
    
    const data = user.save((err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }

    })
})

app.delete("/",async(req,res) => {

    naam = req.params.name
    console.log(naam)

    if (naam) {
        try {
            await User.deleteOne(naam,(err,result)=>{
                if(err){
                    res.send(error)
                }else if (result){
                    res.send("deleted" + result)
                }
            });
        
            
        } 
        catch (error) {
            
        }
        
      } else {
          res.send("error")
      }

    
    
})



app.listen(3000,() => {
    console.log("Server is Running")

})