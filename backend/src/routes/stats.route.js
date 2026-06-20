import { Router } from "express";
import {Song} from '../models/song.model.js'
import {User} from '../models/user.model.js'
import {Album} from '../models/album.model.js'
const router = Router()

router.get('/' , async (req, res, next) => {
    try {
        
        const [totalSongs, totalUsers, totalAlbums, usiqueArtists] = await Promise.all([
            Song.countDocuments(),
            User.countDocuments(),
            Album.countDocuments(),
            Song.aggregate([
                {
                    $uniqueWith: {
                        coll: 'albums',
                        pipeline: []
                    }
                },
                {
                    $group: {
                        _id: "$artist",
                    }
                },
                {
                    $count: "count",
                },
            ])
        ]);

        res.json(200).json({
            totalSongs,
            totalUsers,
            totalAlbums,
            usiqueArtists: usiqueArtists[0]?.count || 0,
        });
    } catch (error) {
        next(error);
    }
})
export default router