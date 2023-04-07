import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Author, AuthorDocument } from 'src/author/entities/author.model';

import { Authorid, CreateAuthorInput, UpdateAuthorInput } from './author.input';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel('Author') private authorModel: Model<AuthorDocument>,
  ) {}

  async create(author: CreateAuthorInput): Promise<Author> {
    const newBook = new this.authorModel(author);
    return await newBook.save();
  }

  async readAll(): Promise<Author[]> {
    return await this.authorModel.find().exec();
  }

  // async readById(id): Promise<Author> {
  //   return await this.authorModel.findById(id).exec();
  // }

  async update(updateAuthor: UpdateAuthorInput): Promise<Author> {
    const id = new mongoose.Types.ObjectId(updateAuthor.id);
    return await this.authorModel.findByIdAndUpdate(id, updateAuthor, {
      new: true,
    });
  }

  async delete(authorid: string): Promise<any> {
    return await this.authorModel.findByIdAndRemove(authorid);
  }
}
