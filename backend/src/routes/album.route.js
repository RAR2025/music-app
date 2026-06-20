import { Router } from "express";
import { getAllAlbums, getAlbumsbyId } from "../controller/album.controller.js";
const router = Router()

router.get('/' , getAllAlbums)
router.get('/:id' , getAlbumsbyId)
export default router