import React from 'react';
import { useFetch } from 'react-async';

const Planets = ({ id }) => {
    const { data, error } = useFetch(`https://swapi.co/api/planets/${id}/`, {
        headers: { accept: "application/json" },
    })
  
    if (error) return error.message
    if (data) return (
        <>
            <img className="image" src={require(`../../assets/images/planets/${id}.jpg`)} alt="Planets Star Wars" />
            <span>{data.name}</span>
        </>
    )
    return null
}

export default Planets;