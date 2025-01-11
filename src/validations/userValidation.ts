import { body } from 'express-validator';

export const userValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').notEmpty().withMessage('Email is required'),
  body('phone').notEmpty().withMessage('Phone is required'),
];