import React from 'react';
import './Business.css';


const business = {
    imageSrc: 'https://64.media.tumblr.com/b3770fb1e35404abcdf79d31e23656e4/3fb43f56835d1cfd-0a/s500x750/14f58ce6435cf07f65037548929223b5c88a1a39.png',
    name: 'Animu Pizza',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}
class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src='https://64.media.tumblr.com/b3770fb1e35404abcdf79d31e23656e4/3fb43f56835d1cfd-0a/s500x750/14f58ce6435cf07f65037548929223b5c88a1a39.png' alt='' />
                </div>
                <h2>{business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.state} {business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{business.category}</h3>
                        <h3 class="rating">{business.rating} stars</h3>
                        <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        )

    }
}

export default Business;