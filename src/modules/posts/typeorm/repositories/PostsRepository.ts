import { EntityRepository, Repository } from 'typeorm';
import Post from '../entities/Post';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  public async findByID(id: string): Promise<Post | undefined> {
    const post = this.findOne({
      where: {
        id,
      },
    });

    return post;
  }
}
