import React, {useState} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import List from '../Data.js';
import './movieList.css';
import Filter from '../Filter/Filter.js';
import MotCle from '../Filter/MotCle.js';
import '../Filter/filter.css';
import MovieAdd from '../MovieAdd/MovieAdd';




const MovieList = () => {
    const [MovieList, setMovieList]=useState(List);
    const [rate, setRate] =useState(0);
    const [motCle, setMotCle]=useState('');

    const addToList=(movie)=>{return setMovieList([...MovieList, movie]); }
   
    return (
        <div >
            
            <div className="filter">
            <MotCle setMotCle={setMotCle}/>
            <Filter setRate={setRate}/>
            </div>
            <div className="cinetheque">
             {MovieList.filter(movie=>movie.rate>=Number(rate)&& movie.title.toLowerCase().includes(motCle.toLowerCase())).map((movie,i)=><MovieCard movie={movie} key={i}/>)}
            </div>
            <MovieAdd addToList={addToList}/>
        </div>
    );
}

export default MovieList;
