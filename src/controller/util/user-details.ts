import { Request } from 'express';
import jwt from 'jsonwebtoken';

export  async function getUserObj(req: Request) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    let userOBJ: any = {};
    if (token) {
        let key: any;
        key = process.env.ACCESS_TOKEN_SECRET
        jwt.verify(token, key, (err: any, user: any) => {
            userOBJ = user;

        });
    }
    return userOBJ;
}