//Start the server


const express=require("express");

const app=express();

//stiching the route here

app.use(express.json())
require("./routes/idea.route")(app)


app.listen(8000,()=>{
    console.log("App started on the port number ",8000);
})





