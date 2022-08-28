import React from 'react';

const Card = props => {
    return (
        <div className="card shadow">
            {props.children}
        </div>
    )
}

export default Card;