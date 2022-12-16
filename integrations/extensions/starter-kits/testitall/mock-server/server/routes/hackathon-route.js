// import dependencies and initialize the express router

import express from 'express';
import {mockLogin} from '../controllers/hackathon/create-jwt.js';
import {sentiment} from '../controllers/hackathon/sentiment.js';
export const hackathonRouter = express.Router();

// define routes
hackathonRouter.get('/login', mockLogin);
hackathonRouter.get('/sentiment', sentiment);

export default hackathonRouter;
