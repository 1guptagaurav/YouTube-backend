import dotenv from "dotenv"
import db_connect from './db/index.js';
import {app} from './app.js';
dotenv.config({
    path: './.env'
})
let port=process.env.PORT||8000;
db_connect()
.then(()=>{
    app.listen(port, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
    app.get('/', (req, res) => {
        res.send('Hello World!');
      });
      
})
.catch((err)=>{
    console.log("MongoDB connect failed!!!",err)
})