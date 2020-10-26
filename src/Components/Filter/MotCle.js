import React from 'react';

const MotCle = ({setMotCle}) => {
    return (
        <div>
                            
                <div className="input-group mb-3 col-sm-10">
                        
                        <input type="text" className="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" placeholder="recherche par mot clé"
                        onChange={(event)=>setMotCle(event.target.value)}></input>
                </div>

        </div>
    );
}

export default MotCle;
