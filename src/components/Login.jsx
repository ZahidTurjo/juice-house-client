import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const {login}=useContext(AuthContext)
    const handleLogIn=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        login(email,password)
        .then(result=>{
            console.log(result.user);
            if(result.user){
                Swal.fire('succesfully logged in')
                const lastLogin=result.user?.metadata?.lastSignInTime
                const user={email,lastLogin}

                fetch('http://localhost:5000/users',{
                    method:'PATCH',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                })
            }
        })
        .catch(error=>{
            console.log(error.message);
        })

    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Login now!</h1>
</div>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form 
  onSubmit={handleLogIn}
  className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
  </form>
</div>
</div>
</div>
        
    </div>
    );
};

export default Login;