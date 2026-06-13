import { Router } from "express";
const router = Router()

router.get('/' , (req, res) => {
    res.send(`stats route via get method`)
})
export default router