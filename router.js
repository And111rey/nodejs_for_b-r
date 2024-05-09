import Router  from "express";

const router = new Router()


// .....создаем маршруты для каждой операции
router.post('/posts')
router.get('/posts')
router.get('/posts/:id')
router.put('/posts/:id')
router.delete('/posts/:id')

export default router