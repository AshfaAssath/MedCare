import express from 'express';
import PaymentValidator from '../validator/payment-validator';
import HandleValidations from '../middleware/handle-validations';
import PaymentController from '../controller/payment-controller';

const router = express.Router();

router.post('/create_payment', 
    PaymentValidator.checkCreateBill(),
    HandleValidations.handleUserValidationError,
    PaymentController.createPayment
);

router.get('/get_bills_by_bill_id', 
    PaymentValidator.checkBillById(),
    HandleValidations.handleUserValidationError,
    PaymentController.getBillsById
);

router.get('/get_bills_within_dateRange', 
    PaymentValidator.checkGetAllBillswithRange(),
    HandleValidations.handleUserValidationError,
    PaymentController.getBillsWithinDateRange
);

export default router;