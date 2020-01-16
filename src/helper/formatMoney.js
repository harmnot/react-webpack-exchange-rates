const formatMoney = (currency, amount) => {
    const formatter = new Intl.NumberFormat('en-US', {
        // style: 'currency',
        currency,
      })
    return formatter.format(amount);
}

export default formatMoney;