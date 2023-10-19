import { useLoaderData, useParams } from 'react-router-dom';
import Navber from '../component/Navber';
import Card from '../brandCard/Card';



const ProductsRoutePage = () => {


    const products = useLoaderData()



    console.log(products)


    return (
        <div>
            <Navber></Navber>

            {

                products.map(productCard => <Card key={productCard._id} productCard={productCard}></Card>)
            }


        </div>
    );
};

export default ProductsRoutePage;