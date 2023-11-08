import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import auth from "../../../firebase/firebase.config";
const NavBar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const { user, logOut } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          console.log(currentUser);
          if (currentUser.displayName) {
            setUserName(currentUser.displayName);
          }
        }
        setIsLoading(false);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log();
        Swal.fire("user Logged Out");
      })
      .catch((error) => console.log(error));
  };
  const navBar = user ? (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/myprofile">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/blog">blog</NavLink>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/login">login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-[120px]">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className={"btn bg-red-500 text-white  text-xl lg:hidden"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <Link to="/">
            <p
              className={
                "btn bg-red-500 text-white normal-case text-3xl font-bold "
              }
            >
              FooDo
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={"menu menu-horizontal px-4"}>{navBar}</ul>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="">
          {user ? (
            <>
              <span className="flex flex-col pr-6">
                <p className={"text-sm "}>{user.email}</p>{" "}
                <p className={"font-bold "}>{userName}</p>{" "}
              </span>
            </>
          ) : (
            <Link to="/signup">
              <div className="flex">
                <button className="btn  bg-red-500  text-white">
                  register
                  <BiLogOutCircle className="text-2xl text-white" />
                </button>
              </div>
            </Link>
          )}
        </div>
        {user && (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn bg-red-500 text-white btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user ? user.photoURL : ""} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[100] p-2 shadow menu menu-sm bg-red-500 text-white dropdown-content rounded-box w-52 text-2xl"
            >
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
