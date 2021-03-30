import express from 'express';
import dotenv from 'dotenv';
import { router as defaultRouter } from './router';
import { router as usersRouter } from './admin/users';

dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();

app.use('/', defaultRouter);
app.use('/admin', usersRouter);

app.listen(port);
