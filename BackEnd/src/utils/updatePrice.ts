import productsModel from "../model/productsModel"
import { resolveNewPrice } from "../types"

export const updatePrices = async (arr: resolveNewPrice[]) => {

    if (Array.isArray(arr)) {
        await Promise.all(
            arr.map(async e => {
                if (e.success) {
                    //calcular novo preço de pack`
                    if (Array.isArray(e.packs)) {
                        e.packs.map(async (e) => {
                            // prisma retorna em um array todos para que são o foreing key do item
                            let pack = await productsModel.products.findFirst({ where: { code: parseInt(e.code) } })
                            if (pack) {

                                await productsModel.products.update({
                                    where: { code: pack.code }, data: {
                                        sales_price: e.new_price
                                    }
                                })
                            }
                        })
                        // atualiza o valor do produto
                        await productsModel.products.update({
                            where: { code: e.product_code },
                            data: { sales_price: e.new_price }
                        })


                    }
                }
            })
        )
        return { success: true }
    }
    return { success: false }
}
