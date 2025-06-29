import mongoose from "mongoose";

const connection ={}

async function connect(){

    if(connection.isConnected){

        return
    }

    if (mongoose.connection.length > 0){

        connection.isConnected=mongoose.connection[0].readyState
        if(connection.isConnected===1){

            return
        }
        await mongoose.disconnect()
    }

    const db = await mongoose.connect(process.env.MONGO_URL)
    connection.isConnected=db.connections[0].readyState
}

const db = {connect}

export default db