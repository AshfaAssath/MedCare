import { UserInstance } from '../../model/model-user';
import { Response } from 'express';

export async function checkForUserPassword(userId: number, token: string) {
    try{
        const user = await UserInstance.findOne({ where: { id: userId }});
        if(user) {
            if(user.getDataValue('token') !== token) {
                return false;
            }
            else{
                return true;
            }
        }
    }
    catch(e){
        console.log(e);
    }
}