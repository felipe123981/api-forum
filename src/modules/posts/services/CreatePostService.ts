import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Post from '../typeorm/entities/Post';
import { PostRepository } from '../typeorm/repositories/PostsRepository';

interface IRequest {
  id: string;
  title: string;
  content: string;
}
class CreatePostService {
  public async execute({ id, title, content }: IRequest): Promise<Post> {
    const postsRepository = getCustomRepository(PostRepository);
    const postExists = await postsRepository.findByID(id);

    const post = postsRepository.create({
      id,
      title,
      content,
    });

    await postsRepository.save(post);

    return post;
  }
}

export default CreatePostService;
