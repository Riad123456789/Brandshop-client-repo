import { Link } from 'react-router-dom';
// import Slider from '../component/Slider';

const Card = ({ productCard }) => {

    const { name, photo, _id, type, price, shortdescription, brandname, rating } = productCard

    return (
        <div className=''>
           

            <div className=" card-compact border p-2 w-96 mx-auto overflow-hidden  bg-lime-600 shadow-lg">
                <figure><img className='w-[600px] h-64' src={photo} alt="Shoes" /></figure>
                <div className="card-body">

                    <div className='flex gap-16'>
                        <h2 className="card-titl">Brand Name : {brandname} </h2>
                        <p className=''>name : {name}</p>
                    </div>

                    <div className='flex justify-around items-center'>
                        <p>Type : {type}</p>
                        <p> Price : {price}</p>
                        <p>{rating}</p>
                    </div>
                    <p>{shortdescription}</p>
                    <div className="card-actions justify-between">
                        <Link to={`/details/${name}`}><button className="btn btn-outline text-white ">Details button</button></Link>

                        <Link to={`/Update/${_id}`}>  <button className="btn btn-outline text-white">Update button</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;