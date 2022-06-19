import postsRouter from "@modules/posts/routes/posts.routes";
import { Router } from "express";
//import mailsRouter from "@modules/posts/routes/posts.routes";

const routes = Router();

//routes.use('/emails', mailsRouter);
routes.use('/posts', postsRouter);

routes.get('/', (request, response) => {
  return response.json({
    message: 'Forum Application Rest-API'
  });
});

export default routes;
