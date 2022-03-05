import express from 'express';
import PatientValidator from '../validator/patient-validator';
import HandleValidations from '../middleware/handle-validations';
import PatientController from '../controller/patient-controller';
import vendorValidator from '../validator/patient-validator';

const router = express.Router();

router.post('/add_patient', 
    PatientValidator.checkCreatePatient(),
    HandleValidations.handleUserValidationError,
    PatientController.addPatient
);

router.post('/get_patient_by_id',
    PatientValidator.checkPatientById(),
    HandleValidations.handleUserValidationError,
    PatientController.getPatientById
)


router.post('/patient_search',
    PatientValidator.checkSearchQuery(),
    HandleValidations.handleUserValidationError,
    PatientController.patientSearch
);

export default router;