import { useLoaderData } from "react-router-dom";
import Header from "../component/Header";
import Navber from "../component/Navber";
import Brand from "../brandCard/Brand";
import Foother from "../component/Foother";
import Banner from "../component/Banner";

const Homepage = () => {

    const AllBrand = useLoaderData()

    return (
        <div>
            <Header></Header>
            <Navber ></Navber>
            <Banner></Banner>


            <div className="text-center mt-10 p-5 pt-5">
                <h1 className="font-semibold text-3xl">-------  Our Brand  -------</h1>
                <p className="font-medium pt-3">
                    Every day we are offering different organic menu with schedule and food quantity with statistics.
                </p>
                <p className="font-medium pt-4">
                    Check today's recipes and offers!
                </p>
            </div>


            <div className="  grid md:grid-cols-2 mt-8 mb-4 gap-10 p-10 lg:grid-cols-3 ">
                {
                    AllBrand.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }

            </div>
            <Foother></Foother>

        </div>
    );
};

export default Homepage;