import Navber from '../component/Navber';

const AddProductPage = () => {


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
      
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(data.insertedId){
                    alert("success")
                }
            })


    }




    return (
        <div>
            <Navber></Navber>


            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" name='brandname' placeholder="Brand Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <input type="text" name='type' placeholder="Type" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number,text" name='price' placeholder="price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input type="text" name='shortdescription' placeholder="Short description" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">rating</span>
                    </label>
                    <input type="number" name='rating' placeholder="rating" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name='photo' placeholder="Image url" className="input input-bordered" required />
                </div>

                <input className='btn btn-secondary w-full' type="submit" value="add" />


            </form>


        </div>
    );
};

export default AddProductPage;