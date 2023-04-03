import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Auth } from 'src/author/entities/author.schema';
import { Authorid, CreateAuthorInput, UpdateAuthorInput } from './author.input';
import { AuthorService } from './author.service';

@Resolver()
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Query((returns) => [Auth])
  async fetchAll(): Promise<any> {
    return await this.authorService.readAll();
  }

  @Mutation((returns) => Auth)
  async createBook(@Args('input') input: CreateAuthorInput) {
    return await this.authorService.create(input);
  }

  @Mutation((returns) => Auth)
  async findById(@Args('bookid') bookid: Authorid) {
    return await this.authorService.readById(bookid._id);
  }

  @Mutation((returns) => Auth)
  async update(@Args('updateBook') updateBook: UpdateAuthorInput) {
    return await this.authorService.update(updateBook);
  }

  @Mutation((returns) => Auth)
  async delete(@Args('bookid') bookid: Authorid) {
    return await this.authorService.delete(bookid._id);
  }
}
