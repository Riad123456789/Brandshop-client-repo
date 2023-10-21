import { useLoaderData } from 'react-router-dom';
import Navber from '../component/Navber';
import AddProductCard from '../brandCard/AddProductCard';
import Header from '../component/Header';
import Foother from '../component/Foother';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyCartPage = () => {


    const { loading } = useContext(AuthContext)

    const loderData = useLoaderData();

    if (loading) {
        return <span className="loading loading-spinner loading-md  "></span>
    }


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