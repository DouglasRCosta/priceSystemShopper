import { Request, Response } from "express";
import { resolveNewPrice } from '../types/index'
import Busboy from 'busboy'
import csv from 'csv-parser'
import { checkNewPrices } from "../utils/checkNewPrices";
import { updatePrices } from "../utils/updatePrice";

export default {
    checkPriceByCsv: async (req: Request, res: Response) => {
        try {

            const busboy = Busboy({ headers: req.headers, limits: { fieldSize: 25 * 1024 * 1024 } });
            let jsonResult: resolveNewPrice[] = [];

            busboy.on("file", (name, file, info) => {
                if (info.mimeType !== 'text/csv')
                    return res.status(400).json({ error: 'Apenas arquivos CSV são suportados.' })

                file.pipe(csv()).on('data', (data: any) => {
                    jsonResult.push(data);

                })
                    .on('end', async () => {
                        // verifica coluna do csv

                        if (!jsonResult.every((data) => 'product_code' in data && 'new_price' in data)) {
                            res.status(400).json({ error: 'O csv deve possuir as colunas  product_code e new_price.' })

                        }
                        const updatedProducts: resolveNewPrice[] = []
                        // espera as promisses serem resovidas do map

                        for (const key in jsonResult) {
                            updatedProducts.push(await checkNewPrices(jsonResult[key]))
                        }


                        res.status(200).json(updatedProducts);
                    })

            })

            req.pipe(busboy)

        } catch (error) {

        }
    },
    updatePrice: async (req: Request, res: Response) => {
        try {
            const updateArray: resolveNewPrice[] = req.body
            // verifica novamete os dados
            await Promise.all(
                updateArray.map(async e => {
                    if (!(await checkNewPrices(e)).success) {
                        return res.status(400).json({ error: 'Dados enviados Incorretos.' })
                    }
                })
            )

            // atualiza os dados
            let update = await updatePrices(updateArray);
            (update.success) ? res.status(200).json(update.success) : res.status(400).json({ success: false });

            return
        } catch (error) {
            throw new Error('update Price')
        }

    }
}