import React from 'react';

import '../App.css';

const Card = (props) =>  {
    return(
        <div className="card-grid">
            <div className="card">
                <img src={props.image} alt="Logo" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p>Price:<span>{props.price}</span></p>
                    <p>Category:<span>{props.category}</span></p>
                    <a href="/" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>      
    );
}

export default Card