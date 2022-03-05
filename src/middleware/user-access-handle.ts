import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
import { UserAccessLevelInstance } from '../model/model-user-access';
import { checkForUserPassword } from './auth/user-validate-controller';
import { any } from 'sequelize/types/lib/operators';

dotenv.config();

class ValidateUserAccess {

    handleUserCreateAccess(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if(token == null) return res.status(401).json({
            success: false,
            msg: "Unauthorized, Token not available"
        });

        let key :any;
        key = process.env.ACCESS_TOEKN_SECRET
        jwt.verify(token, key,async (err:any, user:any) => {
            if(err) {
                return res.status(403).json({
                    success:false,
                    msg: "Forbidden, User not authorized"
                });
            }

            if(await checkForUserPassword(user.userId, token)){
                const userAccessObj = await getAccessObjFromRoleAndRoute(user.role);
                if(userAccessObj) {
                    if(userAccessObj.create){
                        next();
                    }else{
                        return res.status(403).json({
                            success: false, 
                            msg: user.userName+ " Forbidden, User not authorized to create"
                        })
                    }
                }else{
                    return res.status(403).json({
                        success: false, 
                        msg: "Forbidden , User not authorized"
                    })
                }
            }else{
                return res.status(401).json({
                    success: false, 
                    msg: "Forbidden, User not authorized, Invalid token provided!"
                })
            }
        })

    }

    handleUserUpdateAccess(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.status(401).json({
            success: false,
            msg: "Unauthorized,Token not available"
        });

        let key: any;
        key = process.env.ACCESS_TOKEN_SECRET
        jwt.verify(token, key, async (err: any, user: any) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    msg: "Forbidden, User not authorized"
                });
            }
            if (await checkForUserPassword(user.userId, token)) {
                const userAccessObj = await getAccessObjFromRoleAndRoute(user.role);
                if (userAccessObj) {
                    if (userAccessObj.create) {
                        next();

                    } else {
                        return res.status(403).json({
                            success: false,
                            msg: user.userName + " Forbidden, User not authorized to create"
                        });
                    }

                } else {
                    return res.status(403).json({
                        success: false,
                        msg: "Forbidden, User not authorized"
                    });
                }
            } else {
                return res.status(401).json({
                    success: false,
                    msg: "Forbidden, User not authorized, Invalid token provided!"
                });
            }
        });
    }

    handleUserReadAccess(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.status(401).json({
            success: false,
            msg: "Unauthorized,Token not available"
        });

        let key: any;
        key = process.env.ACCESS_TOKEN_SECRET
        jwt.verify(token, key, async (err: any, user: any) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    msg: "Forbidden, User not authorized"
                });
            }
            if (await checkForUserPassword(user.userId, token)) {
                const userAccessObj = await getAccessObjFromRoleAndRoute(user.role);
                if (userAccessObj) {
                    if (userAccessObj.create) {
                        next();

                    } else {
                        return res.status(403).json({
                            success: false,
                            msg: user.userName + " Forbidden, User not authorized to create"
                        });
                    }

                } else {
                    return res.status(403).json({
                        success: false,
                        msg: "Forbidden, User not authorized"
                    });
                }
            } else {
                return res.status(401).json({
                    success: false,
                    msg: "Forbidden, User not authorized, Invalid token provided!"
                });
            }
        });
    }

    handleUserDeleteAccess(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.status(401).json({
            success: false,
            msg: "Unauthorized,Token not available"
        });

        let key: any;
        key = process.env.ACCESS_TOKEN_SECRET
        jwt.verify(token, key, async (err: any, user: any) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    msg: "Forbidden, User not authorized"
                });
            }
            if (await checkForUserPassword(user.userId, token)) {
                const userAccessObj = await getAccessObjFromRoleAndRoute(user.role);
                if (userAccessObj) {
                    if (userAccessObj.create) {
                        next();

                    } else {
                        return res.status(403).json({
                            success: false,
                            msg: user.userName + " Forbidden, User not authorized to create"
                        });
                    }

                } else {
                    return res.status(403).json({
                        success: false,
                        msg: "Forbidden, User not authorized"
                    });
                }
            } else {
                return res.status(401).json({
                    success: false,
                    msg: "Forbidden, User not authorized, Invalid token provided!"
                });
            }
        });
    }

}

async function getAccessObjFromRoleAndRoute(role: string) {
    const accessObj = await UserAccessLevelInstance.findAll({ where: { routeName:'user', roleName: role }})

    if(accessObj){
        let userAccessObj: any = {}
        accessObj.forEach(obj =>{
            userAccessObj.create = obj.getDataValue('make');
            userAccessObj.update = obj.getDataValue('reform');
            userAccessObj.read = obj.getDataValue('view');
            userAccessObj.delete = obj.getDataValue('destroy');
        })
        return userAccessObj;
    }
}

export default new ValidateUserAccess();