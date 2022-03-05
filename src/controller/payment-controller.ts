import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import db from '../config/database.config';
import { PaymentInstance } from '../model/model-payment';
import { getUserObj } from './util/user-details';


 

class PaymentContoller { 
    async createPayment(req: Request, res: Response) {
        try{
            const record = await PaymentInstance.create({ ...req.body});
            return res.json({ record, msg: 'Successfully created..', isSuccess: true });
        }
        catch(e) {
            return res.json({ msg: 'fail to create ', status:500, route: 'create', error: e});
        }
    }

    async getBillsById(req: Request, res: Response) {
        try{
            let id: number
            id = req.body.id;

            let record:any; 
            record = await PaymentInstance.findOne({ where: { id:id}})
            return res.json({ record, isSuccess: true });
        }
        catch(e){
            return res.json({ msg: 'fail to get', error:e, status:500, route: '/getBillById' });
        }
    }
    
    async getBillsWithinDateRange(req: Request, res: Response) {
        try {
            const startDate = req.body.startDate;
            const endDate = req.body.endDate;
            const record = await db.query('SELECT * FROM `payment` WHERE `name` LIKE "%' +  + '%"', { type: QueryTypes.SELECT });
            if (record.length !== 0) {
                return res.json({ record, isSuccess: true });
            }
            else {
                return res.json({
                    msg: 'no data',
                    record: [],
                    isSuccess: true
                })
            }
        }
        catch (e) {
            return res.json({ msg: 'fail to search', error: e, status: 500, route: '/getBillsWithinDateRange' });
        }
    }
}

export default new PaymentContoller();

