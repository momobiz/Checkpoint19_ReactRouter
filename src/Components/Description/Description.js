import React,{useState, useEffect} from 'react';
import Trailer from '../DataTrailer.js';
import {Link} from 'react-router-dom';
import './description.css';

const Description = ({match}) => {

    const [trailer, setTrailer]=useState({});
    
    useEffect(()=>{
               setTrailer(Trailer.find(el=>el.id===+match.params.id))
    },[]);

   
    return (
        <div style={{padding:"50px", paddingBottom:'200px'}}>

         
    <h2> Titre : {trailer.title}</h2>
            <p> Description :{trailer.description} </p>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <img src={trailer.url1} alt="" width="300px"/>
                <img src={trailer.url2} alt="" width="300px"/>
                <img src={trailer.url3} alt="" width="300px"/>

            </div>
           <Link to="/movieList">
            <button type="button" className="btn btn-success" style={{marginTop:"20px"}}>  Home </button>
            </Link>  
            
        </div>
    );
}

export default Description;
