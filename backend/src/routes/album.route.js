import { Router } from "express";
const router = Router()

router.get('/' , (req, res) => {
    res.send(`ablum route via get method`)
})
export default router