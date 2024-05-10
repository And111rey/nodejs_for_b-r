import Post from "./Post.js"

class PostController {
    async create(req, res){
        try {
            const { author, title, content, piscture } = await req.body // заполояем данные для модеои от клиента 
            const post = await Post.create({ author, title, content, piscture })
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }

    }
}

export default new PostController()