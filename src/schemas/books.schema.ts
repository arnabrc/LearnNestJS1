import * as mongoose from 'mongoose';

export const booksSchema = new mongoose.Schema({
    Name: String,
    Price: Number
}, {
    versionKey: false
});  