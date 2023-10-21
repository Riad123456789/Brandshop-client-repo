import { Link, NavLink } from "react-router-dom";
import img from "../assets/8016_1400505170_evergreen2.jpg"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navber = () => {
    const { LogOut, user } = useContext(AuthContext)


    const handleSignOut = e => {
        e.preventDefault();

        LogOut()
            .then()
            .catch()
    }


    const NavLinks = <>

        <NavLink to={'/'}> <li className="hover:bg-lime-600 rounded-lg"><p className="font-medium"> Home</p></li></NavLink>
        <NavLink to={'/add products'}><li className="hover:bg-lime-600 rounded-lg"> <p className="font-medium">Add products </p></li></NavLink>
        <NavLink to={'/My Cart'}><li className="hover:bg-lime-600 rounded-lg"><p className="font-medium"> My Cart </p></li></NavLink>
        <NavLink to={'/contact'}><li className="hover:bg-lime-600 rounded-lg"><p className="font-medium">Contact</p></li></NavLink>
    </>


    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {NavLinks}
                        </ul>
                    </div>

                    <div className="">
                        <img className='w-[250px]' src={img} alt="" />
                    </div>

                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user?.displayName ? <p className=' sm: hidden p-2 font-medium text-sm md:block '>{user.displayName}</p> : <p></p>
                    }
 

                    {
                        user?.photoURL ? <div className="w-10 p-1 border rounded-full">
                            <img className='rounded-full' src={user.photoURL} />
                        </div>
                            :
                            <div className="w-10 rounded-full">
                            </div>
                    }



                    {
                        user ? <button onClick={handleSignOut} className="btn btn-sm bg-lime-600 hover:bg-white">Sing out</button>

                            :

                            <button className="btn btn-sm bg-lime-600 hover:bg-white"><Link to={'/login'}>Login</Link></button>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navber;