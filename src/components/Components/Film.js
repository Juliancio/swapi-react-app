import React, { useEffect, useRef } from 'react';
import { useAsync } from 'react-async';


import Navbar from "../Navbar";
import People from './People';
import Planets from './Planets';
import Starships from './Starships';
import Loading from './Loading';
import './style.css';


const loadFilmsById = async ({ id }, { signal }) => {
    const res = await fetch(`https://swapi.co/api/films/${id}`, { signal })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}

function Film({ match }) {
    let id = match.params.id;
    let rafID = useRef(null);
    const { data, error, isPending } = useAsync({ promiseFn: loadFilmsById, id });
    

    useEffect(() => {
        return () => {
            cancelAnimationFrame(rafID)
        }
    })

    if (error) return `Something went wrong: ${error.message}`

    if (isPending) return (
        <div className="loading">
            <Loading loading={true} />
        </div>
    )

    return (
        <div className="main">
            <Navbar />
            <div className="banner-film" >
                <div>
                    <div className="film-details">
                        <div className="film-image">
                            {data.episode_id !== undefined ?
                                <img className="image-film" src={require(`../../assets/images/films/${data.episode_id}.jpg`)}
                                    alt="Film Star Wars" />
                                : null}
                        </div>
                        <div className="film-info">
                            <h1>{data.title}</h1>
                            <h3>Opening Crawl</h3>
                            <p>{data.opening_crawl}</p>
                            <div className="film-info-2">
                                <div className="director-name">
                                    <h3>Director</h3>
                                    <p>{data.director}</p>
                                </div>
                                <div className="producer-name">
                                    <h3>Producer</h3>
                                    <p>{data.producer}</p>
                                </div>
                                <div className="date-release">
                                    <h3>Release</h3>
                                    <p>{data.release_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-film">
                <h1>Characters</h1>
                <div className="container-card">
                    {data.characters.map((c) => {
                        return (
                            <div className="card-image" key={c.split('/')[5]} >
                                <People id={c.split('/')[5]} />
                            </div>
                        )
                    })}
                </div>
                <h1>Planets</h1>
                <div className="container-card">
                    {data.planets.map((p) => {
                        return (
                            <div className="card-image" key={p.split('/')[5]} >
                                <Planets id={p.split('/')[5]} />
                            </div>
                        )
                    })}
                </div>
                <h1>Starships</h1>
                <div className="container-card">
                    {data.starships.map((s) => {
                        return (
                            <div className="card-image" key={s.split('/')[5]} >
                                <Starships id={s.split('/')[5]} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="footer">
                <p>
                    Developed By <a rel="noopener noreferrer" target="_blank" href="https://juliancio.com.br/">Juliâncio Carvalho</a> &copy;
                </p>
            </div>
        </div>
    )
}

export default Film;