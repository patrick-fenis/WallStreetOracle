fetch ('https://api.stockdata.org/v1/data/quote?symbols=LMT&api_token=E8gohHXE0bQzggOAYqRNwzZigNrJVbQxUlS4soLq').then
((response) => {
    return response.json()
}).then((json) => {
    console.log(json)
},
(err) => {
    console.log(err)
}) 