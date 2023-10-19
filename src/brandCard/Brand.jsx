import { Link } from "react-router-dom";

const Brand = ({ brand }) => {

    const { BrandName } = brand;

    return (
        <div>
            <Link to={`/productsRoutePage/${BrandName}`}>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    {/* <figure><img src={photo} alt="Shoes" /></figure> */}
                    <div className="card-body">
                        <h2 className="card-title">{BrandName}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Brand;