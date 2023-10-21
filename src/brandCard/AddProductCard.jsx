import { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../provider/AuthProvider';



const AddProductCard = ({ product }) => {



    const { loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner loading-md  "></span>
    }


    const { name, photo, _id, type, price, shortdescription, brandname, rating } = product

    const handledeleted = (_id) => {
        fetch(` https://server-site-5laplgulj-riads-projects-d9eea291.vercel.app/deletedprodutc/${_id}`, {

            method: "DELETE"

        })

            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.deletedCount > 0) {
                    swal("deleted")

                }

            })
    }


    return (
        <div>
            <div className="border card-compact w-96 mx-auto bg-lime-600 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{brandname}</h2>
                    <h2 className="card-title">{shortdescription}</h2>
                    <div className="card-actions justify-end">
                        <button onClick={() => handledeleted(_id)} className="btn btn-outline text-white">deleted</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductCard;