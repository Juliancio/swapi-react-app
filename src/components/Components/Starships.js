import React from 'react';
import { useFetch } from 'react-async';

const Starships = ({ id }) => {
    const { data, error } = useFetch(`https://swapi.co/api/starships/${id}/`, {
        headers: { accept: "application/json" },
    })
  
    if (error) return error.message
    if (data) return (
        <>
            <img className="image starships" src={require(`../../assets/images/starships/${id}.jpg`)} alt="Starships Star Wars" />
            <span>{data.name}</span>
        </>
    )
    return null
}

export default Starships;