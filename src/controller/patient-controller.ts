import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import db from '../config/database.config';
import { PatientInstance } from '../model/model-patient';

class PatientContoller { 
    async addPatient(req: Request, res: Response) {
        try{
            const record = await PatientInstance.create({ ...req.body});
            return res.json({ record, msg: 'Successfully created..', isSuccess: true });
        }
        catch(e) {
            return res.json({ msg: 'fail to create ', status:500, route: 'create', error: e});
        }
    }

    async getPatientById(req: Request, res: Response) {
        try{
            let id: number
            id = req.body.id;

            let record:any; 
            record = await PatientInstance.findOne({ where: { id:id}})
            return res.json({ record, isSuccess: true });
        }
        catch(e){
            return res.json({ msg: 'fail to get', error:e, status:500, route: '/getAllUsersWithLimit' });
        }
    }
    
    async patientSearch(req: Request, res: Response) {
        try {
            const query = req.body.query;

            const record = await db.query('SELECT * FROM `patient` WHERE `name` LIKE "%' + query + '%"', { type: QueryTypes.SELECT });
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
            return res.json({ msg: 'fail to search', error: e, status: 500, route: '/search/patient' });
        }
    }
}

export default new PatientContoller();

