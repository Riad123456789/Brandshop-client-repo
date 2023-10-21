import { Link } from 'react-router-dom';
import Navber from '../component/Navber';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Header from '../component/Header';
import Foother from '../component/Foother';
import { FaGoogle } from 'react-icons/fa';

const RegisterPage = () => {

    const { CreatUser, googleLogin } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, email, password)
        CreatUser(email, password, name)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })

    }




    const handleGooglelogin = (media) => {
        media()
            .then(res => {
                console.log(res.user)
            }
            )
            .catch()
    }



    return (

        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="hero min-h-screen bg-slate-400">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  font-medium">Name :</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email :</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Password :</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-lime-700 text-white" >Register</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={() => handleGooglelogin(googleLogin)} className="btn  bg-lime-700 text-white" ><FaGoogle></FaGoogle>Google</button>
                            </div>

                            <p> Please Login Here  <Link className='text-blue-700' to={'/login'}>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <Foother></Foother>
        </div>
    );
};

export default RegisterPage;