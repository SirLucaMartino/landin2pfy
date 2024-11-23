import { body, validationResult } from 'express-validator';

export const validateContact = [
  body('name').trim().notEmpty().withMessage('El nombre es requerido'),
  body('email').trim().isEmail().withMessage('Email inválido'),
  body('message').trim().notEmpty().withMessage('El mensaje es requerido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];