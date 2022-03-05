import { body } from 'express-validator';

class PrescriptionValidator {
    checkCreatePrescription() {
        return [
            body('date')
                .notEmpty()
                .withMessage('The date cannot be empty'),
            body('details')
                .notEmpty()
                .withMessage('The details value cannot be empty'),
            body('patient_id')
                .notEmpty()
                .withMessage('The patient_id value cannot be empty')
        ];
    }

    checkGetPrescriptionByPatientId() {
        return[
            body('patient_id')
            .notEmpty()
            .withMessage('The vendorId value cannot be empty')
        ]
    }

    checkGetPrescriptionById() {
        return[
            body('id')
            .notEmpty()
            .withMessage('The vendorId value cannot be empty')
        ]
    }
   
}

export default new PrescriptionValidator();