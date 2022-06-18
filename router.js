import express  from "express";
import UserController from "./controllers/UserCntroloer.js";

const Router = express.Router();

Router.get('/user', UserController.getAll)
Router.get('/user/:id', UserController.getId)
Router.post('/user', UserController.input)
Router.patch('/user/:id', UserController.update)
Router.delete('/user/:id', UserController.delete)


export default Router;