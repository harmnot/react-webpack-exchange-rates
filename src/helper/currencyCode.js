const currencyCode = kode => {
    const data = [ 
        ['CAD', "Canadian Dollar"],
        ['HKD', "Hong Kong Dollar"] ,
        ['ISK', "Iceland Krona"],
        ['PHP', "Philippine Peso"],
        ['DKK', "Danish Krone"],
        ['HUF', "Hungarian Forint"],
        ['CZK', "Czech Koruna"],
        ['AUD', "Australian Dollar"],
        ['RON', "Romanian New Leu"],
        ["EUR", "Euro"],
        ['SEK', "Swedish Krona"],
        ['IDR', "Indonesian Rupiah"],
        ['INR', "Indian Rupee"],
        ['BRL', "Brazilian Real"],
        ['RUB', "Russian Rouble"],
        ['HRK', "Croatian Kuna"],
        ['JPY', "Japanese Yen"],
        ['THB', "Thai Baht"],
        ['CHF', "Swiss Franc"],
        ['SGD', "Singapore Dollar"],
        ['PLN', "Polish Zloty"],
        ['BGN', "Bulgarian Lev"],
        ['TRY', "Turkish Lira"],
        ['CNY', "Chinese Yuan"],
        ['NOK', "Norwegian Krone"],
        ['NZD', "New Zealand Dollar"],
        ['ZAR', "South African Rand"],
        ['USD', "United States Dollar"],
        ['MXN', "Mexican Peso"],
        ['ILS', "Israeli Shekel"],
        ['GBP', "British Pound"],
        ['KRW', "Korean Won"],
        ['MYR', "Malaysian Ringgit"],  
    ]

    for(let [code, country] of data) {
        if(kode.toUpperCase() === code ) {
            return country;
        }
    }
}

export default currencyCode;