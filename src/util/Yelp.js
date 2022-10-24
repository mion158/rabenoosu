apiKey = 'sorryitishidden'

//an object
const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://api.yelp.com/v3/businesses/search?term=TERM&location=LOCATION&sort_by=SORT_BY`);
    }
}

