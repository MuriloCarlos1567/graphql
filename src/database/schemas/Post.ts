import mongoose, { Schema, Document } from 'mongoose';

export interface IPost {
  author: string;
  description: string;
  likes: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IPostDocument extends Document, IPost {}

const PostSchema = new Schema<IPostDocument>(
  {
    author: String,
    description: String,
    likes: {
      type: Number,
      default: 0,
      required: false
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: false
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      required: false
    }
  },
    {
      timestamps: {},
    }
);

const model = mongoose.model<IPostDocument>('Post', PostSchema);

export default model;