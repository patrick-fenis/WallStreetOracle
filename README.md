# WallStreetOracle
This is an app that allows anyone to search for a stock ticker symbol and have the website return a "Buy" or "Sell" recommendation
based on an algorithm that annalyses the stock data to return this result. The webiste uses html and css code to set up the page layout and 
design. 

Using the form element the webiste allows the user to input the ticker symbol they would like to find out about. This form then submits the
search value into a fetch function which searches the API database for the company in question. The data returned is then passed onto the 
web page using DOM manipulation. The website then presents the stock symbol, name of the company and the verdict on whether to buy or sell
the equity. 