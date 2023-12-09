import mongoose from 'mongoose';
// mongoose is used ODM(object data modeling)
// mongoose is used to help in creating the schames
// and the schema is gona create in the mongodb

// const userSchema =new mongoose.Schema(
//  this's r just normal practice the below one is the best practice
// {
//     userName:String,
//     email:String,
//     isActive:Boolean,
//   }
// )

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required...'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
