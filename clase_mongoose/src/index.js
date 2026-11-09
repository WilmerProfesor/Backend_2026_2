import express from "express"
import studentsRouters from "./routes/students.routers.js"
import mongoose from "mongoose";

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/students", studentsRouters)

const conection = async()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://wilmerprofesor_db_user:f3zmkSSUgG6oDtVn@cluster0.hbjeewy.mongodb.net/",
            {dbName: "school"}
        )
        console.log("Conectados a la BBDD 'school'");
    } catch (error) {
        console.log("NO FUE POSIBLE LA CONEXIÓN: "+error)
    }
}
conection();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})