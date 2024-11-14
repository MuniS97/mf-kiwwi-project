import mongoose from "mongoose";

// const connection: any = {}
const dbUri: string = process.env.NEXT_PUBLIC_MONGODB_URL as string

// async function connect() {
//     if (connection.isConnected) {
//         console.log('already connected');0
//         return;
//     }

//     const db = await mongoose.connect(dbUri);


//     connection.isConnected = db.connections[0].readyState;
// }

// export default connect


const connect = async () => {
    try {
        await mongoose.connect(dbUri);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw new Error("Could not connect to MongoDB" + error);
    }
}

export default connect