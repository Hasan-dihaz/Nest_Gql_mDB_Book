import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Author } from 'src/author/entities/author.model';
import { Authorid, CreateAuthorInput, UpdateAuthorInput } from './author.input';
import { AuthorService } from './author.service';

@Resolver()
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => [Author])
  async fetchAllAurhor(): Promise<any> {
    return await this.authorService.readAll();
  }

  @Mutation(() => Author)
  async createAuthor(@Args('input') input: CreateAuthorInput) {
    return await this.authorService.create(input);
  }

  // @Query((returns) => Author)
  // async findAuthorById(@Args('authorid') authorid: Authorid) {
  //   return await this.authorService.readById(authorid._id);
  // }

  @Mutation(() => Author)
  async updateAuthor(@Args('updateAuthor') updateAuthor: UpdateAuthorInput) {
    return await this.authorService.update(updateAuthor);
  }

  @Mutation(() => Author)
  async deleteAuthor(@Args('authorid') authorid: Authorid) {
    return await this.authorService.delete(authorid._id);
  }
}
