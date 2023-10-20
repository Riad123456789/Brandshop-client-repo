import { useLoaderData } from 'react-router-dom';
import Navber from '../component/Navber';
import AddProductCard from '../brandCard/AddProductCard';

const MyCartPage = () => {

    const loderData = useLoaderData();

    console.log(loderData)
    return (
        <div>
            <Navber></Navber>
            <div className='grid grid-cols-2'>

                {
                    loderData.map(product => <AddProductCard key={product._id} product={product}></AddProductCard>)
                }
            </div>

        </div>
    );
};

export default MyCartPage;