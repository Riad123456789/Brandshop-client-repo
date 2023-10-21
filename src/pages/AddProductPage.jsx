import { useContext } from 'react';
import Foother from '../component/Foother';
import Header from '../component/Header';
import Navber from '../component/Navber';
import swal from 'sweetalert';
import { AuthContext } from '../provider/AuthProvider';



const AddProductPage = () => {

    const { loading } = useContext(AuthContext)

    if ( loading) {
        return <span className="loading loading-spinner loading-md  "></span>
    }

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortdescription = form.shortdescription.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const Products = { name, brandname, type, price, shortdescription, rating, photo }

        fetch('https://server-site-8k6035klh-riads-projects-d9eea291.vercel.app ', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.insertedId) {
                    swal("successfully add")
                }
            })


    }


    return (
        <div>
            <Header></Header>
            <Navber></Navber>

            <div className='bg-slate-400 p-16 '>

                <form onSubmit={handleSubmit}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-medium">Name : </span>
                        </label>
                        <input type="text text-base font-medium" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-medium">Brand Name :</span>
                        </label>
                        <input type="text text-base font-medium" name='brandname' placeholder="Brand Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-medium">Type :</span>
                        </label>
                        <input type="text text-base font-medium" name='type' placeholder="Type" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-medium">Price :</span>
                        </label>
                        <input type="number,text text-base font-medium" name='price' placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-medium">Short description :</span>
                        </label>
                        <input type="text text-base font-medium" name='shortdescription' placeholder="Short description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-medium">Rating :</span>
                        </label>
                        <input type="number" name='rating' placeholder="rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-medium">Image :</span>
                        </label>
                        <input type="text text-base font-medium" name='photo' placeholder="Image url" className="input input-bordered" required />
                    </div>

                    <div className='mt-5'>
                        <input className='btn btn-success bg-lime-600 w-full' type="submit" value="Add products" />
                    </div>


                </form>

            </div>

            <Foother></Foother>

        </div>
    );
};

export default AddProductPage;