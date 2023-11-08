import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  console.log(signInUser);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        console.log();
        Swal.fire("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "wrong Information",
        });
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-gray-100">
        <div className="hero-content flex-col l">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral text-white">
                  Login <BiLogInCircle className="text-2xl text-white" />
                </button>
              </div>
            </form>
            <p className="flex justify-center text-sm pt-1 text-center">
              sign in with
            </p>
            <p className=" flex justify-center pt-2">
              <button onClick={handleGoogleSignIn}>
                <FcGoogle className="text-3xl" />
              </button>
            </p>
            <p className="pl-2">
              {" "}
              new to here ? Please
              <Link to="/register" className="text-black font-bold">
                {" "}
                signUp
              </Link>
              {""} here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
