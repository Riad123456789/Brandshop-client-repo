import { useLoaderData } from "react-router-dom";
import Header from "../component/Header";
import Navber from "../component/Navber";
import Brand from "../brandCard/Brand";
import Foother from "../component/Foother";

const Homepage = () => {

    const AllBrand = useLoaderData()

    return (
        <div>
            <Header></Header>
            <Navber></Navber>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                {

                    AllBrand.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }

            </div>
            <Foother></Foother>

        </div>
    );
};

export default Homepage;