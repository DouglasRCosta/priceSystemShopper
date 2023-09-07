export type resolveNewPrice = {
    product_code: number
    name: string
    sales_price: string
    new_price: string
    success: boolean
    problems: string[]
    packs:resolvepack[]
}
export type errorResponse = {
    error:string,
    type:number
}

export type resolvepack={
    code:string
    name:string
    sales_price: string
    new_price: string
}