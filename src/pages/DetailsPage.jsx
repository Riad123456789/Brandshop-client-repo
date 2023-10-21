import { useLoaderData } from 'react-router-dom';
import Navber from '../component/Navber';
import Header from '../component/Header';
import Foother from '../component/Foother';
import swal from 'sweetalert';

const DetailsPage = () => {
    const loderdata = useLoaderData();
    const { name, photo, _id, type, price, shortdescription, brandname, rating } = loderdata

    const handleClick = () => {


        fetch(' https://server-site-66hc4ismv-riads-projects-d9eea291.vercel.app/addproduct', {
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
                    swal("successfully add ")
                }
            })
    }


    return (
        <div className=''>
            <Header></Header>
            <Navber></Navber>

            <div className="card card-side h-[400px]  bg-lime-600 mt-14 shadow-xl">
                <figure><img className='h-[400px]' src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{shortdescription}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleClick} className="btn btn-outline text-white">add to cart</button>
                    </div>
                </div>
            </div>
            <Foother></Foother>
        </div>
    );
};

export default DetailsPage;