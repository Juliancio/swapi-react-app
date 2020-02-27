import React from 'react';
import { useFetch } from 'react-async';


const People = ({ id }) => {
    const { data, error } = useFetch(`https://swapi.co/api/people/${id}/`, {
        headers: { accept: "application/json" },
    })
  
    if (error) return error.message
    if (data) return (
        <>
            <img className="image" src={require(`../../assets/images/characters/${id}.jpg`)} alt="People Star Wars" />
            <span>{data.name}</span>
        </>
    )
    return null
}

export default People;