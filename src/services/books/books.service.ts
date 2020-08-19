import { Injectable, Get } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BooksModel } from '../../models/books.model';

@Injectable()
export class BooksService {
    constructor(@InjectModel('books') private readonly booksModel: Model<BooksModel>) {}

    // Create 
    async add(book) {
        const createBook = new this.booksModel(book);
        await createBook.save();
    }

    // Read All
    async getAll() {
        return await this.booksModel.find();
    }

    // Read All
    async getOne(id) {
        return await this.booksModel.find({ _id: id });
    }

    // Update
    async update(id, book) {
        await this.booksModel.updateOne({ _id: id }, book);
    }

    // Delete
    async delete(id) {
        await this.booksModel.deleteOne({ _id: id });
    }
}
