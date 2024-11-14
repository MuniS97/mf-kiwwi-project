import mongoose from "mongoose";

const dbUri: string = process.env.NEXT_PUBLIC_MONGODB_URL as string

const connect = async () => {
    try {
        await mongoose.connect(dbUri);
    } catch (error) {
        throw new Error("Could not connect to MongoDB" + error);
    }
}

export default connect