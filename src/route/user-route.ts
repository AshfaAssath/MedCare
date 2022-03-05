import express from 'express';
import UserValidator from '../validator/user-validator';
import UserMiddleware from '../middleware/handle-validations';
import UserController from '../controller/user-controller';

const router = express.Router();

router.post('/add_user',
    UserValidator.checkCreateUser(),
    UserMiddleware.handleUserValidationError,
    UserController.addUser,
);

router.post('/user_login', 
    UserValidator.checkLogin(),
    UserMiddleware.handleUserValidationError,
    UserController.loginUser,

)

export default router;