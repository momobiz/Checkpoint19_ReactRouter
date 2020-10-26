import React from 'react';

const CategoryCard = ({category}) => {
    return (
        <div >
           <div className="card" style={{width:'350px'}}>
  <img className="card-img-top" src={category.img} alt="Card image cap" style={{height:"250px"}}></img>
  <div className="card-body">
    <h4 className="card-title">{category.category}</h4>
    
    
  </div>
</div>
        </div>
    );
}

export default CategoryCard;
