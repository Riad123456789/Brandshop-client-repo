import { Link } from 'react-router-dom';
import Navber from '../component/Navber';
import Header from '../component/Header';
import Foother from '../component/Foother';


const LoginPage = () => {
    const handleLogin = e => {

        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)
    }


    return (
        <div>
            <Header></Header>
            <Navber></Navber>

            <div className="hero min-h-screen bg-slate-400">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium ">Email :</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium ">Password :</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-lime-700 text-white">Login</button>
                            </div>

                            <p className=''>Please Register Here : <Link className='text-indigo-700' to={'/register'}>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>

            <Foother></Foother>
        </div>
    );
};

export default LoginPage;