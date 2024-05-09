import mongoose from "mongoose";


//...........Создаем схему 
const Post = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    picture: {type: String}
})

export default mongoose.model('post', Post)
// ........название модели 'post'......будет ориентироваться на схему - Post