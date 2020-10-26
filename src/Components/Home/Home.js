import React from 'react';
import CategoryCard from './CategoryCard';
import Categories from './Categories.js';
import './catgry.css';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <div style={{paddingBottom:'200px', paddingTop:'50px'}}>
            <h2> La cinéthèque </h2>
            <h3 style={{color:'white', textAlign:'center'}}> **** Bienvenue à notre cinéthèque, voici notre sélection pour les films de comédie  *****  </h3>
            
            <div className="catgry">
            {Categories.map((category,key)=>(<Link to={`/movieList/${category.id}`}><CategoryCard category={category} key={key}/></Link>))}
             </div> 
            
        </div>
    )
}

export default Home;