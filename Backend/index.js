let express = require("express")
let app=express()
require("./connection/connect")
let classRoutes= require("./Routes/classRoutes")
let studentRoutes= require("./Routes/studentRoutes")
app.use("/v1/myClass", classRoutes)
app.use(" /v1/myClass/myClassId/students", studentRoutes)
app.listen(8000, ()=>{console.log("port is at 8000")})