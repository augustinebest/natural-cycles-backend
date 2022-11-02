import "dotenv/config";
import App from "./app";
import UserController from "./controllers/user.controller";

const app = new App([new UserController()], Number(process.env.PORT));

const server = app.listen();

// test if the server is live
app.get();

export default server;
