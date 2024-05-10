import Router from "express";
import Post from "./PostModel.js";


const router = new Router();

router.post("/posts", async (req, res) => {
  try {
    const { author, title, content, picture } = req.body;
    const post = await Post.create({ author, title, content, picture });
    res.status(200).json(post);
  } catch (e) {
    res.status(500);
    throw e;
  }
});
router.get("/posts");
router.get("/posts/:id");
router.put("/posts/:id");
router.delete("/posts/:id");

export default router;
