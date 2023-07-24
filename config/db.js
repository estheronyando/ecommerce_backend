const mongoose=require('mongoose');

function getDatabase(){
    mongoose.connect('mongodb+srv://eonyando89:OesGWHjTvQXOSvdB@express-app.rjary2s.mongodb.net/')

    let db=mongoose.connection

    db.once('open',()=>{
        console.log('Db connection successful')
    })

    db.on('error',()=>{
        console.log('Db connection failed')
    })

    return db;
}

module.exports=getDatabase;