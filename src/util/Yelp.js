apiKey = ''

//an object
const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {
            Authorization: `Bearer ${apiKey}`
        }}).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) { //see if jsonresponse has a businesses key
                return jsonResponse.businesses.map();
            }
        });
    }
}

