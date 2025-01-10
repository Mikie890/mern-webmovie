import { validationResult } from 'express-validator';

// Validate request body
const validate = (req, res, next) => { 
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
    // If there are errors, return Bad Request and the first error message
    if (!errors.isEmpty()) {
        return res.status(400).json( errors.array()[0].msg );
    }
}

export default validate;