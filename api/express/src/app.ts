import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { router as defaultRouter } from './router';
import { router as usersRouter } from './admin/users';

dotenv.config();
const port = process.env.SERVER_PORT;
const uri = process.env.API_URL;
const envCors = process.env.CORS;
const app = express();

const corsOptions = {
  origin: [uri ?? '*'].concat(envCors?.split(',') ?? []),
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Authorization',
  ],
  methods: ['HEAD', 'GET', 'PUT', 'POST', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());
app.enable('etag');

app.get('/cors', (req, res) => {
  res.send(envCors);
});
app.use('/', defaultRouter);
app.use('[./]*/error/:error', (req, res) => {
  res
    .status(parseInt(req.params.error))
    .json({ message: req.query.message ?? 'This is a forced error' });
});
app.use('/admin', usersRouter);

app.listen(port);
