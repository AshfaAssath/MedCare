import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import db from '../config/database.config';
import { PrescriptionInstance } from '../model/model-prescription';
import { getUserObj } from './util/user-details';

class PrescriptionContoller { 
    async createPrescription(req: Request, res: Response) {
        try{
            const user = await getUserObj(req);
            const record = await PrescriptionInstance.create({ ...req.body});
            return res.json({ record, msg: 'Successfully created..', isSuccess: true });
        }
        catch(e) {
            return res.json({ msg: 'fail to create ', status:500, route: 'create', error: e});
        }
    }

    async getPrescriptionById(req: Request, res: Response) {
        try{
            let id: number
            id = req.body.id;

            let record:any; 
            record = await PrescriptionInstance.findOne({ where: { id:id}})
            return res.json({ record, isSuccess: true });
        }
        catch(e){
            return res.json({ msg: 'fail to get', error:e, status:500, route: '/getPrescrptionById' });
        }
    }
    
    async getPrescriptionByPatientId(req: Request, res: Response) {
        try {
            const id = req.body.patientId;

            let records:any; 
            records = await PrescriptionInstance.findAll({ where: { patient_id:id}})
            return res.json({ records, isSuccess: true });
        }
        catch (e) {
            return res.json({ msg: 'fail to search', error: e, status: 500, route: '/getPrescrptionByPatientId' });
        }
    }
}

export default new PrescriptionContoller();

