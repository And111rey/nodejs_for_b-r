import Post from "./Post.js"

class PostService {
    async create(post) {
        console.log(post)
        const createdPost = await Post.create(post)
        return createdPost


    }
    async getAll() {
        try {
            const posts = await Post.find()
            return posts
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(id) {
        if (!id) {
            throw new Error("ID not specified....")
        }
        const post = await Post.findById(id)
        console.log("POSTTTT", post)
        return post
    }
    async update(post) {
        try {
            if (!post._id) {
                throw new Error("Can`t update ID not specified.... ")
            }
            console.log("))))))))", post)
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
            return updatedPost
        } catch (e) {
            res.status(500).json(e)
        }

    }
    async delete(id) {
        try {
            if (!id) {
                throw new Error("ID nor specified.......")
            }
            const post = await Post.findByIdAndDelete(id)
            return post

        } catch (e) {
            res.status(500).json(e)
        }

    }

}

export default new PostService()