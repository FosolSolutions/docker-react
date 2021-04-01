import express from 'express';
import { db } from '../../data';
import { getPage, getItem, addItem, updateItem, removeItem } from '../../libs';

export const router = express.Router();

/**
 * Return a page of users.
 */
router.get('/users', (req, res) => {
  const { page, qty } = req.query;
  const users = getPage(
    db.users,
    parseInt(page?.toString() ?? '1'),
    parseInt(qty?.toString() ?? '10'),
  );
  res.status(200).json(users);
});

/**
 * Return the user for the specified 'id'.
 */
router.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  try {
    const user = getItem(db.users, (u) => u.id === id);
    res.status(200).json(user);
  } catch (error) {
    res.status(error.status ?? 500).json(error);
  }
});

/**
 * Add a new user to the datasource.
 */
router.post('/users', (req, res) => {
  const user = addItem<any>(db.users, req.body);
  res.status(201).json(user);
});

/**
 * Update a user in the datasource for the specified 'id'.
 */
router.put('/users/:id', (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = updateItem<any>(db.users, req.body, (u) => u.id === id);
    res.status(200).json(user);
  } catch (error) {
    res.status(error.status ?? 500).json(error);
  }
});

/**
 * Remove a user from the datasource for the specified 'id'.
 */
router.delete('/users/:id', (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = removeItem<any>(db.users, req.body, (u) => u.id === id);
    res.status(200).json(user);
  } catch (error) {
    res.status(error.status ?? 500).json(error);
  }
});
