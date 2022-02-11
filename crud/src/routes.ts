import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateUSerController} from "./controllers/UpdateUserController"

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

export {routes}