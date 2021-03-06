import React, {useState} from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

function Search({ hideButtons = false }) {
    const [state, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        console.log('clicked', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });
        history.push('/search');
    }

    return (
        <form className='search'>
            <div className="search__input">
                <SearchIcon/>
                <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                <MicIcon/>
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type='submit' variant='outlined'
                            onClick={search}>google search</Button>
                    <Button variant='outlined'>I'm feeling lucky</Button>
                </div>) : (
                <div className="search__buttons">
                    <Button className='search__buttonsHidden' type='submit' variant='outlined' onClick={search}>google
                        search</Button>
                    <Button className='search__buttonsHidden' variant='outlined'>I'm feeling lucky</Button>
                </div>
            )}


        </form>
    );
}

export default Search;
