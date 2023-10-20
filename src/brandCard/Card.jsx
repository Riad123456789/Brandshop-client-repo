import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ productCard }) => {

    const { name, _id } = productCard
    console.log(_id)

    return (
        <div className=''>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${name}`}><button className="btn btn-primary">Details button</button></Link>

                        <Link to={`/Update/${_id}`}>  <button className="btn btn-primary">Update button</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;