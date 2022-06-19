import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Post from "../typeorm/entities/Post";
import { PostRepository } from "../typeorm/repositories/PostsRepository";

interface IRequest {
  id: string;
  title: string;
  content: string;
  //owner : string;
}

class UpdatePostService {
  public async execute({ id, title, content }: IRequest): Promise<Post> {
    const postsRepository = getCustomRepository(PostRepository);

    const post = await postsRepository.findOne(id);

    if(!post) {
      throw new AppError('Post not found.');
    }

    post.title = title;
    post.content = content;

    await postsRepository.save(post);

    return post;
  }
}

export default UpdatePostService;
