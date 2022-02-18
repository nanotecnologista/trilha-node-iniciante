import { Router } from "express";
import { CreateUserController } from "./controllers/Users/CreateUserController"
import { GetAllUsersController } from "./controllers/Users/GetAllUsersController";
import { DeleteUserController } from "./controllers/Users/DeleteUserController";
import { UpdateUSerController} from "./controllers/Users/UpdateUserController"

//User Type
import { CreateUserTypeController } from "./controllers/UsersType/CreateUserTypeController"; 
import { GetAllUsersTypesController } from "./controllers/UsersType/GetAllUsersTypesController"; 
import { DeleteUserTypeController } from "./controllers/UsersType/DeleteUserTypeController"; 
import { UpdateUserTypeController } from "./controllers/UsersType/UpdateUserTypeController"; 

const routes = Router()

/**
* C - CREATE - (POST)   -ok
* R - READ   - (GET)    -ok
* U - UPDATE - (PUT)    -ok
* D - DELETE - (DELETE) -ok
*/

routes.post("/user", new CreateUserController().handle)
routes.get("/users", new GetAllUsersController().handle)
routes.delete("/user/:id", new DeleteUserController().handle)
routes.put("/user/:id", new UpdateUSerController().handle)

//User Type
routes.post("/usertype", new CreateUserTypeController().handle)
routes.get("/usertypes", new GetAllUsersTypesController().handle)
routes.delete("/usertype/:id", new DeleteUserTypeController().handle)
routes.put("/usertype/:id", new UpdateUserTypeController().handle)


export {routes}