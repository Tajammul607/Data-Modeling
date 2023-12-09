import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      required: true,
    },
    createdBy: {
      tyep: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const Tode = mongoose.model('Todo', todoSchema);
