import mongoose from 'mongoose';
import { mongo } from 'mongoose';

mongoose.connect('mongodb://localhost:27017/service', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});