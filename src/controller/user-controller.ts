import { Request, Response } from 'express';
import { UserInstance } from '../model/model-user';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import { where } from 'sequelize/types';

dotenv.config();

class UserController{

    async addUser(req: Request, res: Response) {
        try{
            const hashPW = await bcrypt.hash(req.body.password, 10);
            const record = await UserInstance.create({ ...req.body, password: hashPW })

            return res.json({ record, success: true, msg: 'Successfully created..', isSuccess: true})
        }
        catch(e){
            return res.json({ msg: 'fail to create', status: 500, route: '/create', error: e });
        }
    }

    async loginUser(req: Request, res: Response) {
        try{
            const userName = req.body.username;
            const password = req.body.password;

            const record = await UserInstance.findOne({ where: { userName: userName }});
            if(record) {
                try{
                    const isValidUser = await bcrypt.compare(password, record.getDataValue('password'))
                    if(isValidUser) {
                        const user = { userName:userName, userId: record.getDataValue('id')}
                        return res.json({ record, succuss: true });
                    }
                    else{
                        return res.json({ success: false, msg: ' User name or password is incorrect '})
                    }
                }
                catch (e) {
                    console.log(e)
                    return res.json(e);
                }
            }
            else {
                return res.json({
                    msg: 'no user available'
                })
            }
        }
        catch(e){
            return res.json({ msg: 'fail login', error: e, status: 500, route: '/user/login' });
        }
    }
}

export default new UserController();