import express from 'express';
import PrescriptionValidator from '../validator/prescription-validator';
import HandleValidations from '../middleware/handle-validations';
import PrescriptionController from '../controller/prescription-controller';

const router = express.Router();

router.post('/add_prescription', 
    PrescriptionValidator.checkCreatePrescription(),
    HandleValidations.handleUserValidationError,
    PrescriptionController.createPrescription
);

router.get('/get_prescription_by_patient_id', 
    PrescriptionValidator.checkGetPrescriptionByPatientId(),
    HandleValidations.handleUserValidationError,
    PrescriptionController.getPrescriptionByPatientId
);

router.post('/get_prescription_by_id', 
    PrescriptionValidator.checkGetPrescriptionById(),
    HandleValidations.handleUserValidationError,
    PrescriptionController.getPrescriptionById
);

export default router;