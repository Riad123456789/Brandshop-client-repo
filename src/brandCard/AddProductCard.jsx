
const AddProductCard = ({ product }) => {
  
    const { name, _id } = product

    const handledeleted = (_id) => {
        fetch(`http://localhost:5000/deletedprodutc/${_id}`, {

            method: "DELETE"

        })

            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.deletedCount > 0) {
                    alert("deleted")
                 
                }

            })
    }


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handledeleted(_id)} className="btn btn-primary">deleted</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductCard;