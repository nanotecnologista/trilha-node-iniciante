import {createConnection, getConnection, getRepository} from "typeorm";
import { TaskActive } from "./entity/TaskActive";

(async () =>{
    try{
        await createConnection();
        const task = new TaskActive();
        task.title = "Task 1"
        task.done = true;
        const result= await task.save();
        console.log(result);

    } catch (exception){
        console.log('Error', exception);
    }
})()