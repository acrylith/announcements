import React, {useContext, useState} from 'react';
import Fuse from 'fuse.js';

import ListContext from './context';

import DisplayList from './component/DisplayList';

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const {announcements} = useContext(ListContext);
    const [searchResult, setSearchResult] = useState([]);

    const search = () => {
        const options = {
            keys: ['title']
        }

        const fuse = new Fuse(announcements.list, options);
        setSearchResult(fuse.search(searchValue));
    }

    const handleInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="Search-page">
            <div className="container">
                <div className="search-wrapper">
                    <input
                        id="search"
                        type="text"
                        placeholder="What are you looking for?"
                        onChange={handleInput}
                    />
                    <button onClick={search}>Search</button>
                </div>
                <DisplayList list={searchResult}/>
            </div>
        </div>
    )
}

export default Search;