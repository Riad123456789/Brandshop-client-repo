import { useLoaderData } from "react-router-dom";
import Header from "../component/Header";
import Navber from "../component/Navber";
import Brand from "../brand/Brand";

const Homepage = () => {

    const AllBrand = useLoaderData()
    console.log(AllBrand)

    return (
        <div>
            <Header></Header>
            <Navber></Navber>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                {

                    AllBrand.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }

            </div>

        </div>
    );
};

export default Homepage;