import { Router, Request, Response } from "express";
import productController from "../controllers/productController";
 

const routes = Router()

routes.get('/ping', (req: Request, res: Response) => {
    res.status(200).json({ pong: true })
})
routes.post('/check-price', productController.checkPriceByCsv)
routes.post('/update-price',  productController.updatePrice)
export default routes