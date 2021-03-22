import { Schema, model } from 'mongoose';
import abstractModel from '../crud_module/model';

const user_schema = new Schema({
    name: String
});

const user_model = model('users', user_schema);

export default abstractModel(user_model);