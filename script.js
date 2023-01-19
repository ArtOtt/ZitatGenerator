let apiQuotes = [];


// Get Quotes from API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[23])
    } catch (error) {
     //catch erreo Here
    }
}

// On load

getQuotes();