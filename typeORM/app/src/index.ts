import "reflect-metadata";
import {createConnection, getConnection, getRepository} from "typeorm";
import { Task } from "./entity/Task";

(async () =>{
    try{
        await createConnection();
        // const entityManager = getConnection().manager;
        // const res= await entityManager.findAndCount(Task);
        
        // console.log('Successfully ',res);

        const taskRepository = getRepository(Task)
        const res= await taskRepository.findAndCount();

        console.log(res)

    } catch (exception){
        console.log('Error', exception);
    }
    
    
    
    /* createConnection('con1')
                    .then(()=> console.log("Connection ok"))
                    .catch(()=>console.log("connection err")) */
    /*     type: "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "123456",
        "database": "teste",
        
    }) */
})()