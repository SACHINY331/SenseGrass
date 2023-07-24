import task from '../model/task.js';

//Get all tasks
export const gettasks = async (request, response) => {
    try{
        const tasks = await task.find();
        response.status(200).json(tasks);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the task in database
export const addtask = async (request, response) => {
    const ttask = request.body;
    
    const newtask = new task(ttask);
    try{
        await newtask.save();
        response.status(201).json(newtask);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

//Get a task by id
export const gettaskById = async (request, response) => {
    try{
        const ttask = await task.findById(request.params.id);
        response.status(200).json(ttask);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited task in the database
export const edittask = async (request, response) => {
    let ttask = request.body;

    const edittask = new task(ttask);
    try{
        await task.updateOne({_id: request.params.id}, edittask);
        response.status(201).json(edittask);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of task from the database
export const deletetask = async (request, response) => {
    try{
        await task.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}