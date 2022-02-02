import {createConnection, getConnection, getRepository} from "typeorm";
import { TaskRepository } from "./entity/TaskRepository";
import {Task} from "./entity/Task"

(async () =>{
    try{
        const con = await createConnection();
        
        const taskRepository =con.getCustomRepository(TaskRepository)
        taskRepository.create()

        const task = new Task();
        task.title = "Task 1"
        task.done = true;
        const result= await taskRepository.save(task);
        console.log(result);

    } catch (exception){
        console.log('Error', exception);
    }
})()