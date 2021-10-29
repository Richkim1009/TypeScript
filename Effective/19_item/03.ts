function parseNumber(str: string, base = 10) {

}

app.get('/health', (request, response)=> {
  response.send('OK');
});

const cache: {[ticker: string]: number} = {};
function getQuote(ticker: string): Promise<number> {
  if(ticker in cache) {
    return cache[ticker];
  }
  return fetch(`https://quotes.example.com/?=${ticker}`)
    .then(response => response.json())
    .then(quote => {
      cache[ticker] = quote;
      return quote;
    });
}