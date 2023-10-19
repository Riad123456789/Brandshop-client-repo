import React from 'react';

const Card = ({productCard}) => {

const {name}=productCard


    return (
        <div>
            {name}
        </div>
    );
};

export default Card;