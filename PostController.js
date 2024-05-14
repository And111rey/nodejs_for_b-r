import Post from "./Post.js"
import PostService from "./PostService.js"

class PostController {
    async create(req, res) {
        try {
            const { author, title, content, piscture } = await req.body // заполояем данные для модеои от клиента 
            const post = await PostService.create({ author, title, content }, req.files.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }

    }
    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const id = req.params.id
            console.log(id)
            const post = await PostService.getOne(id)
            console.log("POSR 2222", post)
            return res.json(post)

        } catch (e) {
            res.status(500).json(e)
        }

    }
    async update(req, res) {
        try {
            const post = req.body;
            const updatedPost = await PostService.update(post)
            console.log("ljjk00000000j", updatedPost)

            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e)
        }

    }
    async delete(req, res) {
        try {
            const { id } = req.params
            const post = await PostService.delete(id)
            return res.json(`DELETED.....${post}`)
        } catch (e) {
            res.status(500).json(e)
        }

    }
}

export default new PostController()