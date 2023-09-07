import { NextFunction, Request, Response } from 'express'
export default (err:any ,req: Request, res:Response, next:NextFunction) => {
    console.error(err)
    res.status(500).json({error:'Erro Interno no servidor!',type:0})
}