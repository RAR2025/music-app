import mongoose from "mongoose";
const songSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    artist : {
        type: String,
        required: true,
    },
    audioUrl: {
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true,
    },

    albumId :{
        type: mongoose.Schema.type.ObjectId,
        ref: 'Album',

        required: true,
    }
}, {timestamps: true})

export const song = mongoose.model("Song", songSchema);