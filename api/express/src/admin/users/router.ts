import express from 'express';
import { users } from '../../data';

export const router = express.Router();

router.get('/users', (req, res) => {
  res.json(users);
});
