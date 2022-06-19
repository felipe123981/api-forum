import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { PostRepository } from "../typeorm/repositories/PostsRepository";

interface IRequest {
  id: string;
}

class DeletePostService {
  public async execute({ id }: IRequest): Promise<void> {
    const postRepository = getCustomRepository(PostRepository);

    const post = await postRepository.findOne(id);

    if(!post) {
      throw new AppError('Post not found.');
    }

    await postRepository.remove(post);
  }
}

export default DeletePostService;
