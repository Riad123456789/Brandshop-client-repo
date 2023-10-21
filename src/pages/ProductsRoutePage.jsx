import { useLoaderData } from 'react-router-dom';
import Navber from '../component/Navber';
import Card from '../brandCard/Card';
import Header from '../component/Header';
import Foother from '../component/Foother';
import Slider from '../component/Slider';


const ProductsRoutePage = () => {
    const products = useLoaderData()

    return (
        <div className='overflow-hidden'>
            <Header></Header>
            <Navber></Navber>
            <Slider></Slider>
            
            <div className='grid  gap-12 mt-4 md:grid-cols-2'>
                {

                    products.map(productCard => <Card key={productCard._id} productCard={productCard}></Card>)
                }

            </div>
            <Foother></Foother>
        </div>
    );
};

export default ProductsRoutePage;