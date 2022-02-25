import { Router } from "express";

import AuthMiddleware from "./middlewares/AuthMiddleware";
import ValidateMiddleware from "./middlewares/EmailValidateMiddleware"

//User 
import { CreateUserController } from "./controllers/users/CreateUserController"
import { GetAllUsersController } from "./controllers/users/GetAllUsersController";
import { DeleteUserController } from "./controllers/users/DeleteUserController";
import { UpdateUSerController} from "./controllers/users/UpdateUserController"

//User Type
import { CreateUserTypeController } from "./controllers/users_types/CreateUserTypeController"; 
import { GetAllUsersTypesController } from "./controllers/users_types/GetAllUsersTypesController"; 
import { DeleteUserTypeController } from "./controllers/users_types/DeleteUserTypeController"; 
import { UpdateUserTypeController } from "./controllers/users_types/UpdateUserTypeController"; 

//Auth
import { ActivateController, AuthController } from "./controllers/auth/AuthController";

const routes = Router()

/**
* C - CREATE - (POST)   -ok
* R - READ   - (GET)    -ok
* U - UPDATE - (PUT)    -ok
* D - DELETE - (DELETE) -ok
*/

//Auth
routes.post("/auth", ValidateMiddleware.check, new AuthController().handle)
routes.post("/validate-mail/:email_token", new ActivateController().handle)

//User
routes.post("/user", new CreateUserController().handle)
routes.get("/users", AuthMiddleware ,new GetAllUsersController().handle)
routes.delete("/user/:id", new DeleteUserController().handle)
routes.put("/user/:id", new UpdateUSerController().handle)

//User Type
routes.post("/usertype", new CreateUserTypeController().handle)
routes.get("/userstypes", new GetAllUsersTypesController().handle)
routes.delete("/usertype/:id", new DeleteUserTypeController().handle)
routes.put("/usertype/:id", new UpdateUserTypeController().handle)


export {routes}