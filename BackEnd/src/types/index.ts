export type resolveNewPrice = {
    product_code: number
    name: string
    sales_price: string
    new_price: string
    success: boolean
    problems: string[]
    packs:resolvePack[]
}
export type rawFileExpected = {
    product_code: string
    new_price: string
}

export type resolvePack={
    code:string
    name:string
    sales_price: string
    new_price: string
}