import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
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
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h1 className="text-5xl font-bold ">Sign Up Here</h1>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleRegister} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="h-12 pl-4 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="h-12 pl-4 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Photo url
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="photo"
                        placeholder="photo"
                        className="h-12 pl-4 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        placeholder="password"
                        name="password"
                        className="h-12 pl-4 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        required
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Register{" "}
                      <BiLogOutCircle className="text-2xl text-white" />
                    </button>
                  </div>
                </form>
              </div>

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
                  <span className="font-bold text-red-500">login</span>
                </Link>{" "}
                Here
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://i.ibb.co/DrwfNqd/IMG-20231109-181030-853.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
