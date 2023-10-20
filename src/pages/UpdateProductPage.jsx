import Navber from '../component/Navber';
import { useLoaderData } from 'react-router-dom';

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

        fetch(`http://localhost:5000/updateproducts/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }


    return (
        <div>
            <Navber></Navber>

            <p>update product {name}</p>

            <form onSubmit={handleUpdate}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">name</span>
                    </label>
                    <input type="text" name='name' defaultValue={name} placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" name='brandname' defaultValue={brandname} placeholder="Brand Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <input type="text" name='type' defaultValue={type} placeholder="Type" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number,text" name='price' defaultValue={price} placeholder="price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input type="text" name='shortdescription' defaultValue={shortdescription} placeholder="Short description" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">rating</span>
                    </label>
                    <input type="number" name='rating' defaultValue={rating} placeholder="rating" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name='photo' defaultValue={photo} placeholder="Image url" className="input input-bordered" required />
                </div>

                <input className='btn btn-secondary w-full' type="submit" value="submit" />


            </form>

        </div>
    );
};

export default UpdateProductPage;