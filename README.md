# WallStreetOracle

Link to live site: https://statuesque-wisp-f9cebc.netlify.app/

This is an app that allows anyone to search for a stock ticker symbol and have the website return a "Buy" or "Sell" recommendation
based on an algorithm that annalyses the stock data to return this result. The webiste uses html and css code to set up the page layout and 
design. 

Using the form element the webiste allows the user to input the ticker symbol they would like to find out about. This form then submits the
search value into a fetch function which searches the API database for the company in question. The data returned is then passed onto the 
web page using DOM manipulation. The website then presents the stock symbol, name of the company and the verdict on whether to buy or sell
the equity. The verdict on whether to buy or sell is based on an algorithm I've written. So far it only annalyses the daily change in peice and makes a recommendation solely off that. As time goes on I will be refining this algorithm. 

In addition to this, the rest of the raw data that doesn't get shown anywhere on the webpage initially can be viewed using the "Learn More" button. When the information is taken from the API, annalysed and passed onto the webpage it also gets saved into a variable. The "Learn More" button opens up a modal that allows you to take a look at the raw data yourself and come to your own conclusions if you would so choose. 