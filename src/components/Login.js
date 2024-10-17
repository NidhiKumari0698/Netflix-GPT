import Header from "./Header";
import { home_background_logo } from "../utils/constants";
import { netflix_logo } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="h-screen flex flex-col items-center relative z-10">
        <div className="w-2/5 flex flex-col items-start bg-black text-white cursor-pointer">
          <div className="m-10">
            <h1 className="font-bold text-3xl my-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 my-4 bg-gray-700 rounded-lg"
              />
            )}

            <input
              type="text"
              placeholder="Email or mobile number"
              className="w-full p-4 my-4 bg-gray-700 rounded-lg"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-4 my-4 bg-gray-700 rounded-lg"
            />
            <button className="w-full p-4 my-6 bg-red-900 rounded-lg">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4" onClick={toggleSignUpForm}>
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already Registered ?Sign In Now"}
            </p>
          </div>
        </div>
      </div>
      <img
        src={home_background_logo}
        alt="background-image"
        className="absolute top-0"
      />
    </>
  );
};

export default Login;
