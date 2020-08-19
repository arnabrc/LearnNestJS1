import { Controller, Get, Post, Body, Delete, Param, UseFilters, ForbiddenException, Put } from '@nestjs/common';
import { BooksService } from '../../services/books/books.service';
import { BooksModel } from '../../models/books.model';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';

@Controller('books') 
@UseFilters(new HttpExceptionFilter())
export class BooksController {

    constructor(private booksService: BooksService) { }

    // Create 
    @Post('add')
    async Add(@Body() book: BooksModel) {
        // throw new ForbiddenException();
        return await this.booksService.add(book);
    }

    // Read All
    @Get('all')
    async GetAll() {
        // throw new ForbiddenException();
        return await this.booksService.getAll();
    }

    // Read One
    @Get('get/:id')
    async GetOne(@Param('id') id) {
        // throw new ForbiddenException();
        return await this.booksService.getOne(id);
    }

    // Update
    @Put('update/:id')
    async Update(@Param('id') id, @Body() book: any) {
        // throw new ForbiddenException();
        await this.booksService.update(id, book);
    }

    // Delete 
    @Delete('delete/:id')
    async Delete(@Param('id') id) {
        // throw new ForbiddenException();
        await this.booksService.delete(id);
    }
}
