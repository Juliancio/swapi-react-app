import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { useAsync } from 'react-async';

import Loading from '../Components/Loading';
import './style.css';

const loadFilms = async ({ signal }) => {
    const res = await fetch(`https://swapi.co/api/films/`, { signal })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}

function Films() {
    const { data, error, isPending } = useAsync(loadFilms);
    let rafID = useRef(null);
    
    useEffect(() => {
        return () => {
            cancelAnimationFrame(rafID)
        }    
    })

    if (isPending) return (
        <div className="loading">
            <Loading loading={true} />
        </div>
    )
    if (error) return `Something went wrong: ${error.message}`
    
    if (data)
        return (
            <>
                <h1>Star Wars Films</h1>
                <div className="container-img" data-testid="films">
                    {data.results.map(films => (
                        <div className="card-img" key={films.episode_id}>
                            <Link to={`/film/${films.url.split('/')[5]}`}>
                                <img className="img-film" src={require(`../../assets/images/films/${films.episode_id}.jpg`)}
                                    alt="Film Star Wars" />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="footer">
                    <p>
                        Developed By <a rel="noopener noreferrer" target="_blank" href="https://juliancio.com.br/">Juliâncio Carvalho</a> &copy;
                    </p>
                </div>
            </>
        )

    return null
}

export default Films;