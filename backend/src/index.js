import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js"
import {clerkMiddleware } from '@clerk/express'
import userRoutes from "./routes/user.route.js"
import adminRoutes from "./routes/admin.route.js"
import authRoutes from "./routes/auth.route.js"
import statsRoutes from "./routes/stats.route.js"
import albumsRoutes from "./routes/album.route.js"
import songsRoutes from "./routes/song.route.js"
import fileUpload from "express-fileupload"
import path from "path"
dotenv.config();

const __dirname = path.resolve();
const app = express();
const port = process.env.Port;
app.use(express.json())
app.use(clerkMiddleware())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath:true,
    limits:{
        fileSize:10 * 1024 * 1024
    }
}))
app.use("/api/users", userRoutes);
app.use("/api/songs", songsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/albums", albumsRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/stats", statsRoutes);

app.use((err, req, res , next) => {
    res.status(500).json({message: (process.env.NODE_ENV === 'production')?"Internal Server Error":err.message})
})
app.listen(port ,() => {
    console.log(`Server is running on port ${port}`);
    connectDB();
})

