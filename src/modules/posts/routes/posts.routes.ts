import { Router } from 'express';
import PostsController from '../controllers/PostsController';

const postsRouter = Router();
const postsController = new PostsController();

postsRouter.get('/', postsController.index);
postsRouter.get('/:id', postsController.show);
postsRouter.post('/', postsController.create);
postsRouter.put('/:id', postsController.update);
postsRouter.delete('/:id', postsController.delete);

export default postsRouter;
