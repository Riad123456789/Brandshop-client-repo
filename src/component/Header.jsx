import { FaFacebook, FaTwitter, FaAmazonPay, FaPhone, FaLinkedinIn } from 'react-icons/fa';



const Header = () => {
    return (
        <div>
            <div className='  md:flex items-center justify-around p-2  bg-lime-600'>
                <div className='flex md: items-center justify-between gap-1  '>
                    <FaPhone className=''></FaPhone>
                    <h1 className='text-white'>+880 3224 257</h1>
                </div>

                <h1 className=' sm: hidden text-center text-white md:block '>
                    Shop on the go, download our app. Details
                </h1>


                <div className='flex gap-5 justify-center items-center  '>
                    <FaAmazonPay></FaAmazonPay>
                    <FaFacebook className=' '></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaLinkedinIn></FaLinkedinIn>

                </div>
            </div>
        </div>
    );
};

export default Header;