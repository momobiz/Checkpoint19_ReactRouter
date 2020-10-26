import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import './movieAdd.css';

const MovieAdd = ({addToList}) => {
     const [titre, setTitre]=useState('');
     const [description, setDescription]=useState('');
     const [url, setUrl]=useState(''); 
     const [note, setNote]=useState(0);

   const buildMovie=(titre,description, url, note)=>{
       return  {id:Math.random(),
                title:titre,
                description:description,
                posterUrl:url,
                rate:note
                
                }
              
    
   }
   
    
     return (
        <div>
            <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title style={{marginLeft:"15px"}}> Ajouter un nouveau film </Modal.Title>
  </Modal.Header>

  <Modal.Body>
     
  <input id="modalTitre" type="text" className="form-control" aria-label="Sizing example input"
         aria-describedby="inputGroup-sizing-default" placeholder="Titre" value={titre}
  onChange={(event)=>setTitre(event.target.value)}></input>
    <input id="modalDescription" type="text" className="form-control" aria-label="Sizing example input"
         aria-describedby="inputGroup-sizing-default" placeholder="Description" value={description}
        onChange={(event)=>setDescription(event.target.value)} ></input>
     <input id="modalUrl" type="text" className="form-control" aria-label="Sizing example input"
         aria-describedby="inputGroup-sizing-default" placeholder="PosterUrl"
         onChange={(event)=>setUrl(event.target.value)} value={url}></input>
     <select id="modalNote" className="custom-select col-sm-12 form-control" 
     onChange={(event)=>setNote(event.target.value)} value={note}>
                <option value="0"> Note </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
        </select>

    
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={()=>{addToList(buildMovie(titre,description, url, note));
                         setTitre('');
                         setDescription('');
                         setUrl('');
                         setNote(0);
                         }} variant="primary">Ajouter</Button>
    
    
  </Modal.Footer>

</Modal.Dialog> 
      
        </div>
    );
}

export default MovieAdd;
