import {Song} from '../models/song.model.js';

export const getAllSongs = async (req, res, next) => {
    try {
        const songs = await Song.find().sort({createdAt : -1});
        res.status(200).json(songs);
    } catch (error) {
        next(error)
    }
}

export const getFeaturedSongs = async (req, res, next) => {}
export const getmadeforyou = async (req, res, next) => {}
export const gettrending = async (req, res, next) => {}
