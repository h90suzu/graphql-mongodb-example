import mongoose, { Schema } from 'mongoose';

const TodoSchema = new Schema({
  title: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('Todo', TodoSchema);
