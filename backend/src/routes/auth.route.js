import { Router } from "express";
import { getAdmin } from "../controller/admin.controller.js";
import {User} from "../models/user.model.js"
import { authCallback } from "../controller/auth.controller.js";

const router = Router()

router.post('/callback',authCallback)
export default router