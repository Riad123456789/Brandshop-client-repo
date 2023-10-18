
const Brand = ({ brand }) => {

    const { brand_name, image_url } = brand;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brand_name}</h2>

                </div>
            </div>
        </div>
    );
};

export default Brand;