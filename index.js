const dotenv = require("dotenv")

const express = require("express")
const app = express()
const mongoose = require("mongoose")

const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")

const authRoute = require("./routes/auth")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true},
    ()=>
    {
        console.log("Connected to MongoDb...")
    }
)

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/user" , userRoute)
app.use("/api/auth" , authRoute)

app.get("/", (req,res)=>
res.send("welcome to home page")
)

app.get("/users", (req,res)=>
res.send("welcome to user page")
)

const PORT = 4000

app.listen(PORT,
    ()=>
{
console.log(`App is runing on PORT: ${PORT}`)
}
)