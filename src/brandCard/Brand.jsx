import { Link } from "react-router-dom";

const Brand = ({ brand }) => {

    const { BrandName, photo } = brand;


    

    return (
        <div className=" relative ">

            <Link to={`/productsRoutePage/${BrandName}`}>
                <div className="">
                    <img className="h-[300px] w-[394px] bg-center border shadow-lg rounded-md " src={photo} alt="Shoes" />
                </div>

                <div className="bg-lime-800 p-5 opacity-80  absolute w-full rounded-lg   top-52">
                    <h2 className="font-bold text-1xl text-white card-title pl-4 ">{BrandName}<span><button className="btn btn-outline btn-xs bg-lime-700 text-white">see more</button></span> </h2>

                    <p className="text-white text-center">schedule and food quantity with statistics.</p>
                </div>
            </Link>

        </div>
    );
};

export default Brand;