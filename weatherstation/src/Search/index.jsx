import React from 'react';
import './search.css'
import SearchIcon from './../assets/search.png';

const Search = () =>{
    return(
        <div className="search">

            <div className="formInput">
                <input className="text" type="text" placeholder="Search City" name="search" />
                <button className="submit" >
                    <img src={SearchIcon} alt="search"/>
                </button>
            </div>

            <div className="history">
                <ul>
                    <li>Accra</li>
                    <li>Kumasi</li>
                    <li>Sunyani</li>
                    <li>Ho</li>
                </ul>
            </div>
        </div>
    )
}

export default Search