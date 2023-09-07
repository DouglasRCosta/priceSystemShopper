import { Request, Response } from 'express'
export default (req: Request, res:Response) => {
    res.status(404).json({error:'Página não Encontrada !',type:1})
}