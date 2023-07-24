import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// document look like
const taskSchema = mongoose.Schema({
    title: String,
    discription: String,
    duedate:Date,
    status:{
        type:String,
        enum:['completed','pending']
    }
  
});

autoIncrement.initialize(mongoose.connection);
taskSchema.plugin(autoIncrement.plugin, 'task');

const posttask = mongoose.model('task', taskSchema);

export default posttask;