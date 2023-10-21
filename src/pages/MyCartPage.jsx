import { useLoaderData } from 'react-router-dom';
import Navber from '../component/Navber';
import AddProductCard from '../brandCard/AddProductCard';
import Header from '../component/Header';
import Foother from '../component/Foother';

const MyCartPage = () => {

    const loderData = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className='grid  md:grid-cols-2 mt-4 gap-9'>

                {
                    loderData.map(product => <AddProductCard key={product._id} product={product}></AddProductCard>)
                }
            </div>
            <Foother></Foother>

        </div>
    );
};

export default MyCartPage;