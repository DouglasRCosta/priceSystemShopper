export const calculateNewpackPrice = (actualPrice: number, qty: number, newItemPrice: number, actualItemPrice: number) => {
    return( (actualPrice - (qty * actualItemPrice)) + (newItemPrice * qty)).toFixed(2)
}