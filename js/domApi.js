let stockData = {}
window.onload = (event) => {
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const search = document.querySelector('input[type="text"]').value
    fetch (`https://api.stockdata.org/v1/data/quote?symbols=${search}&api_token=E8gohHXE0bQzggOAYqRNwzZigNrJVbQxUlS4soLq`).then
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
    modalContent.innerText = stockData
    console.log()
    modal.style.display = "block"
})

document.querySelector('#close').addEventListener('click', () => {
    modal.style.display = "none";
})






