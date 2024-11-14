import mongoose from "mongoose";

const { Schema } = mongoose

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    description: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    image: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    }
}, { timestamps: true })


export default mongoose.models.Perfume || mongoose.model('Perfume', postSchema)