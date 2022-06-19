import { getCustomRepository } from "typeorm";
import Post from '../typeorm/entities/Post';
import { PostRepository } from "../typeorm/repositories/PostsRepository";

class ListPostService {
  public async execute(): Promise<Post[]> {
    const postRepository = getCustomRepository(PostRepository);

    const posts = postRepository.find();

    return posts;
  }
}

export default ListPostService;
