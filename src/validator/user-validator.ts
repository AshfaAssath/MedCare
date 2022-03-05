import { body } from "express-validator";

class UserValidator {
    checkCreateUser() {
        return [
            body('userName')
                .notEmpty()
                .withMessage('The userName value should not be empty'),
            body('password')
                .notEmpty()
                .withMessage('The password value should not be empty')
        ];
    }

    checkLogin() {
        return [
            body('userName')
                .notEmpty()
                .withMessage('The userName value should not be empty'),
            body('password')
                .notEmpty()
                .withMessage('The password value should not be empty')

        ]
    }
}

export default new UserValidator();