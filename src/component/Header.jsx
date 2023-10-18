import { FaFacebook, FaTwitter, FaAmazonPay, FaPhone,  } from 'react-icons/fa';



const Header = () => {
    return (
        <div>
            <div className='space-y-3  md:flex items-center justify-around p-2  bg-[#8b1f1f]'>
                <div className='flex md: items-center justify-between gap-1 pt-2 '>
                    <FaPhone className=''></FaPhone>
                    <h1 className='text-white'>+880 3224 257</h1>
                </div>

                <h1 className='text-center text-white '>
                    Shop on the go, download our app. Details
                </h1>


                <div className='flex gap-5 justify-center items-center  '>
                    <FaAmazonPay></FaAmazonPay>
                    <FaFacebook className='text-[blue] '></FaFacebook>
                    <FaTwitter></FaTwitter>

                </div>
            </div>
        </div>
    );
};

export default Header;