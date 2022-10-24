import { render } from "@testing-library/react";
import React from "react";
import './SearchBar.css';

const sortByOptions = {
    //naming convention on https://www.yelp.com/developers/documentation/v3/business_search
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',

        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }

    //methods 
    // return current css class for sorting option
    getSortedByClass(sortByOption){
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } 
        return '';
    }

    handleSortByChange(sortByOption){
        this.setState = ({sortBy: sortByOption});
    }

    handleTermChange(e){
        this.setState = ({term: e.target.value});
    }

    handleLocationChange(e){
        this.setState = ({location: e.target.value});
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (<li key={sortByOptionValue} 
                        className={this.getSortedByClass(sortByOptionValue)} 
                        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> 
                        {sortByOption} 
                    </li>);
        });
    }


    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Place" onChange={this.handleTermChange}/>
                    <input placeholder="Location?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;