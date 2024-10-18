import mongoose,  {Schema, Document} from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    authProviderId: string,
    created_at: Date;
  }

  const userSchema: Schema<IUser> = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        select: false,
    },
    authProviderId: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
  });
  
  const User = mongoose.models?.User || mongoose.model('User', userSchema);

  export default User;