let stockData = {}
window.onload = (event) => {
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const search = document.querySelector('input[type="text"]').value
    fetch (`https://api.stockdata.org/v1/data/quote?symbols=${search}&api_token=4eACabta8CtXVIVKsOd9lInaIFCHnuBkWgZYIEbJ`).then
    ((response) => {
    return response.json()
    }).then((json) => {
        console.log(json)
        let verdict = ''
        let output = json.data[0].day_change
            if(output > 0){
                verdict = 'SELL'
            } else {
                verdict = 'BUY'
            }
        document.querySelector('#symbol').innerText = json.data[0].ticker
        document.querySelector('#company-name').innerText = json.data[0].name
        document.querySelector('#verdict').innerText = verdict
        stockData = json.data[0]
        console.log(stockData)
    },
    (err) => {
        console.log(err)
        document.querySelector('#symbol').innerText = 'Try Again'
        document.querySelector('#company-name').innerText = 'Not a valid stock ticker. ex. IONQ'
})
})
} 

const modal = document.querySelector('#modal')
const modalContent = document.querySelector('#stock-data') 

document.querySelector('#learn-more').addEventListener('click', () => {
    document.querySelector('#exchange').innerText = `${stockData.exchange_long}(${stockData.exchange_short})`
    document.querySelector('#price').innerText = `$${stockData.price}`
    document.querySelector('#day-change').innerText = stockData.day_change
    document.querySelector('#day-open').innerText = `$${stockData.day_open}`
    document.querySelector('#volume').innerText = stockData.volume
    modal.style.display = "block"
})

document.querySelector('#close').addEventListener('click', () => {
    modal.style.display = "none";
})






