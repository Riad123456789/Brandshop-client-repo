import Foother from '../component/Foother';
import Header from '../component/Header';
import Navber from '../component/Navber';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';


const UpdateProductPage = () => {

    const updateData = useLoaderData()

    const { _id, name, brandname, type, price, shortdescription, rating, photo } = updateData;

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortdescription = form.shortdescription.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const UpdateProducts = { name, brandname, type, price, shortdescription, rating, photo }

        fetch(` https://server-site-5laplgulj-riads-projects-d9eea291.vercel.app/updateproducts/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(data.acknowledged){
                    swal("successfully update")
                }

            })
    }


    return (
        <div>
            <Header></Header>
            <Navber></Navber>

            <p className='text-2xl font-bold'>update product : <span>{name}</span></p>

            <div className='bg-slate-400 p-16 mt-4'>
                <form onSubmit={handleUpdate}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium ">name :</span>
                        </label>
                        <input type="text" name='name' defaultValue={name} placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Brand Name :</span>
                        </label>
                        <input type="text" name='brandname' defaultValue={brandname} placeholder="Brand Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Type :</span>
                        </label>
                        <input type="text" name='type' defaultValue={type} placeholder="Type" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Price :</span>
                        </label>
                        <input type="number,text" name='price' defaultValue={price} placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Short description :</span>
                        </label>
                        <input type="text" name='shortdescription' defaultValue={shortdescription} placeholder="Short description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">rating :</span>
                        </label>
                        <input type="number" name='rating' defaultValue={rating} placeholder="rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Image :</span>
                        </label>
                        <input type="text" name='photo' defaultValue={photo} placeholder="Image url" className="input input-bordered" required />
                    </div>
                    <input className='btn btn-success bg-lime-500 w-full mt-4' type="submit" value="submit" />
                </form>


            </div>
            <Foother></Foother>
        </div>
    );
};

export default UpdateProductPage;