import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire("You have Successfully Registered");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;

    console.log(name, email, password, photoURL);

    if (name) {
      if (password.length < 6) {
        console.error();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password should be at least 6 characters long",
        });
      } else if (!/[A-Z]/.test(password)) {
        console.error();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password should at least contain Capital letter",
        });
      } else if (!/[!@#$%^&*]/.test(password)) {
        console.error();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password should contain at least one special character",
        });
      } else {
        try {
          await createUser(email, password, name, photoURL);
          Swal.fire("You have Successfully Registered");
          window.location.reload();
        } catch (error) {
          console.error("Error registering user:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "U have Provided wrong information or U are already registered",
          });
        }
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name Cannot be empty",
      });
    }
  };
  navigate("/");

  return (
    <>
      <div className="hero min-h-screen rounded-xl">
        <div className="hero-content flex-col">
          <h1 className="text-5xl font-bold ">Sign Up Here</h1>

          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo url</span>
                </label>

                <input
                  type="text"
                  name="photo"
                  placeholder="photo"
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
                  className="input"
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
                  Register <BiLogOutCircle className="text-2xl text-white" />
                </button>
              </div>
            </form>
            <p className="flex justify-center text-sm pt-1 text-center">
              Sign up with
            </p>
            <p className=" flex justify-center pt-2">
              <button onClick={handleGoogleSignUp}>
                <FcGoogle className="text-3xl" />
              </button>
            </p>
            <p>
              Already have an account? Please{" "}
              <Link to="/login">
                <span className="font-bold text-black">login</span>
              </Link>{" "}
              Here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
