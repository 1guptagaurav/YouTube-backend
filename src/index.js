
import db_connect from './db/index.js';



let port=process.env.PORT||8000
db_connect()
.then(
    app.on('uncaughtException',(err)=>{
        console.error(err);
        throw err
    }),
    app.listen(port,()=>{
    console.log(`app connect on port ${port}`)
}))
.catch((err)=>{
    console.log("MongoDB connect failed!!!",err)
})