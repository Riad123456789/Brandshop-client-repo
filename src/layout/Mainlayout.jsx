import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto border'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;