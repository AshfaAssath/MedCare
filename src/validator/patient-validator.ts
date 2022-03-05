import { body } from 'express-validator';

class PatientValidator {
    checkCreatePatient() {
        return [
            body('name')
                .notEmpty()
                .withMessage('The name value cannot be empty'),
            body('birthday')
                .notEmpty()
                .withMessage('The birthday cannot be empty'),
            body('contactNo')
                .notEmpty()
                .withMessage('The contactNo value cannot be empty')
        ];
    }

    checkPatientById() {
        return[
            body('id')
            .notEmpty()
            .withMessage('The id value cannot be empty')
        ]
    }

    checkSearchQuery() {
        return [
            body('query')
            .notEmpty()
            .withMessage('The query cannot be empty')
        ]
    }
}

export default new PatientValidator();