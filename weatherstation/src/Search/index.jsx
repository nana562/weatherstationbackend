import React from 'react';
import './search.css'
import SearchIcon from './../assets/search.png';
import { useDispatch } from 'react-redux';
import { search_location } from './../actions/'
import { useForm } from 'react-hook-form'

const Search = () =>{
    const dispatch = useDispatch()

    const onSubmit = (data) =>{
        dispatch(search_location(data))
    }

    const { register, handleSubmit } = useForm();

    return(
        <div className="search">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formInput">
                    <input className="text" type="text" placeholder="Search City" {...register("location")} />
                    <button className="submit" >
                        <img src={SearchIcon} alt="search"/>
                    </button>
                </div>
            </form>

            <div className="history">
                <ul>
                    <li onClick={(data)=>onSubmit(data={location:'Accra'})} >Accra</li>
                    <li onClick={(data)=>onSubmit(data={location:'Tamale'})} >Tamale</li>
                    <li onClick={(data)=>onSubmit(data={location:'Tema'})} >Tema</li>
                    <li onClick={(data)=>onSubmit(data={location:'Sunyani'})} >Sunyani</li>
                </ul>
            </div>
        </div>
    )
}

export default Search