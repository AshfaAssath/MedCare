import { body } from 'express-validator';

class PaymentValidator {
    checkCreateBill() {
        return [
            body('date')
                .notEmpty()
                .withMessage('The date value cannot be empty'),
            body('prescrption_id')
                .notEmpty()
                .withMessage('The prescrption_id cannot be empty'),
            body('amount')
                .notEmpty()
                .withMessage('The amount value cannot be empty')
        ];
    }

    checkGetAllBillswithRange() {
        return [
            body('startDate')
            .notEmpty()
            .withMessage('The startDate should be not empty'),
            body('endDate')
            .notEmpty()
            .withMessage('The endDate should be not empty')
        ];
    }

    checkBillById() {
        return[
            body('id')
            .notEmpty()
            .withMessage('The id value cannot be empty')
        ]
    }
}

export default new PaymentValidator();