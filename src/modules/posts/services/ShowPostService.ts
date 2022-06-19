import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Post from "../typeorm/entities/Post";
import { PostRepository } from "../typeorm/repositories/PostsRepository";

interface IRequest {
  id: string;
}

class ShowPostService {
  public async execute({ id }: IRequest): Promise<Post> {
    const postRepository = getCustomRepository(PostRepository);

    const post = await postRepository.findOne(id);

    if(!post) {
      throw new AppError('Post not found.');
    }

    return post;
  }
}

export default ShowPostService;
