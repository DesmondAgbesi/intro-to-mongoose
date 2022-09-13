const express = require("express");
const userRouter = require("./routes/users.route");
const {dbConnect} = require("./config/dbConnect")

const app = express();



app.get("/", (req, res) =>{
    res.status(200).send("Welcome to my server. Please use /users to get all users");
});
app.use("/users", userRouter);

async function start(){
    await dbConnect();
    
    app.listen(4000, () => {
        console.log("🚀 Server running on http://localhost:4000/");
    });
}

start();
