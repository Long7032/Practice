import mongoose from 'mongoose'

const { Schema, SchemaTypes, model } = mongoose;

const userSchema = new Schema({
    _id: {
        type: SchemaTypes.ObjectId,
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,

    }
});

const User = model('Users', userSchema);

export default User;