import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto p-2'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;