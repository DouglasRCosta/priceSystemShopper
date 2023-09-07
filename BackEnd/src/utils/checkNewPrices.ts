import productsModel from "../model/productsModel"
import { resolveNewPrice, resolvePack } from "../types"
import { calculateNewpackPrice } from "./caculateNewPackPrice"

export const checkNewPrices = async (product_checked: resolveNewPrice): Promise<resolveNewPrice> => {
    let product: resolveNewPrice = {
        product_code: 0,
        name: "",
        sales_price: '0',
        new_price: '',
        success: false,
        problems: [],
        packs: []
    }

    if (!('product_code' in product_checked && 'new_price' in product_checked)) {
        product.problems.push('o csv deve possuir as colunas product_code new_price ')
        return product
    }

    product.product_code = product_checked.product_code
    product.new_price = product_checked.new_price.trim()


    // converte arredondando o preço para cima sempre com duas decimais caso venha com mais   
    let regexPrice = /^[0-9]{1,9}(?:\.[0-9]{0,2})?$/
    if (!regexPrice.test(product.new_price)) {
        product.problems.push('Preço do produto deve possui até 9 unidades e dois decimais exemplo : 33.98')
    } else {
        product.new_price = parseFloat(product_checked.new_price).toFixed(2)
    }

    // verifica presença de dados de interação atua do map 
    if (product_checked.product_code) {

        let resultDb = await productsModel.products.findFirst({
            where: { code: parseInt(product_checked.product_code?.toString()) }, include: { pack_item: true }

        })

        // verifica se exitencia do priduto pelo código
        if (!resultDb) {
            product.problems.push('Produto não encontrado.')
            return product
        }

        // verifica se o preço é maior que dez porcento
        let priceSales = parseFloat(resultDb.sales_price.toString()).toFixed(2);
        if (parseFloat(product.new_price) > parseFloat(priceSales) * 1.1) {
            product.problems.push('Aumento do preço não deve superar 10%, valor sugerido: ' + (parseFloat(priceSales) * 1.1).toFixed(2))
        }

        // verifica se o preço é menor que o custo
        let priceCost = parseFloat(resultDb.cost_price.toString()).toFixed(2);
        if (parseFloat(product.new_price) < parseFloat(priceCost)) {
            product.problems.push('Aumento do preço não deve menor que o valor de custo, valor de custo: ' + priceCost)
        }


        product.name = resultDb.name
        product.sales_price = resultDb.sales_price.toFixed(2)


        for (const key in resultDb?.pack_item) {

            // prisma retorna em um array todos para que são o foreing key do item
            let pack = await productsModel.products.findFirst({ where: { code: resultDb.pack_item[key].pack_id } })
            if (pack && resultDb) {

                let newpackPrice = calculateNewpackPrice(parseFloat(pack.sales_price.toString()), parseInt(resultDb.pack_item[key].qty.toString()), parseFloat(product.new_price), parseFloat(resultDb.sales_price.toString()))

                let tempPack: resolvePack = {
                    code: resultDb.pack_item[key].pack_id.toString(),
                    name: pack.name,
                    sales_price: pack.sales_price.toFixed(2),
                    new_price: newpackPrice
                }

                product.packs = [...product.packs, tempPack]
            }
        }


        //retorna success true se não haver nenhum problems
        if (product.problems.length == 0) {
            product.success = true
        }

    }
    return product
}

