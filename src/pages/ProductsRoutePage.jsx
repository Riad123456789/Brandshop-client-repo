import { useLoaderData } from 'react-router-dom';
import Navber from '../component/Navber';
import Card from '../brandCard/Card';


const ProductsRoutePage = () => {
    const products = useLoaderData()

    console.log(products)
    return (
        <div>
            <Navber></Navber>

            <div className='grid grid-cols-2'>
                {

                    products.map(productCard => <Card key={productCard._id} productCard={productCard}></Card>)
                }

            </div>

        </div>
    );
};

export default ProductsRoutePage;