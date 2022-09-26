const CURRENCY_FORMATTER = new Intl.NumberFormat( undefined, { 
    style: 'currency',
    currency: 'EUR',
    //currencyDisplay: 'name',
    currencySign: 'accounting'
 } )

export function formatPrice(num: number) {
    return CURRENCY_FORMATTER.format( num );
}