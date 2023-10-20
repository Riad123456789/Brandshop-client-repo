import { useLoaderData } from 'react-router-dom';
import Navber from '../component/Navber';

const DetailsPage = () => {
    const loderdata = useLoaderData();
    const { name } = loderdata
    
    const handleClick = () => {


        fetch('http://localhost:5000/addproduct', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loderdata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.insertedId) {
                    alert("success")
                }
            })
    }


    return (
        <div>
            <Navber></Navber>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleClick} className="btn btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;