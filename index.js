import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js'; // импорт модели 

const PORT = 5000
const pass = 'user'
const DB_URL = 'mongodb+srv://user:user@cluster0.fid29fo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const DB_URL_1 = `mongodb+srv://user:user@cluster0.fid29fo.mongodb.net/`
const app = express()
app.use(express.json())

app.post("/", async (req, res) => {
    try {
        const { author, title, content, piscture } = await req.body // заполояем данные для модеои от клиента 
        const post = await Post.create({ author, title, content, piscture })
        // res.json(post)
        res.json(post)
    } catch (e) {
        res.status(500).json(e)
    }


})
app.get("/", (req, res) => {
    console.log(req.body)
    res.status(200).json('server working....')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL).then(() => {
            console.log("DB connection successful.");
        })
            .catch((err) => {
                console.log(`DB connection error:${err}`);
            })
        app.listen(PORT, () => console.log(`server on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
startApp()