window.onload = (event) => {
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const search = document.querySelector('input[type="text"]').value
    fetch (`https://api.stockdata.org/v1/data/quote?symbols=${search}&api_token=E8gohHXE0bQzggOAYqRNwzZigNrJVbQxUlS4soLq`).then
    ((response) => {
    return response.json()
    }).then((json) => {
        console.log(json)
        document.querySelector('#symbol').innerText = json.data[0].ticker
        document.querySelector('#company-name').innerText = json.data[0].name
    },
    (err) => {
        console.log(err)
        document.querySelector('#symbol').innerText = 'Try Again'
        document.querySelector('#company-name').innerText = 'Not a valid stock ticker. ex. IONQ'
})
})
} 