import Header from "./Header";
import { home_background_logo } from "../utils/constants";
import { netflix_logo } from "../utils/constants";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { nidhi_propic_pic } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  console.log("LOGIN COMP RENDERING STARTED");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleBtnClick = () => {
    //validate the form data
    console.log(
      "email & password",
      name?.current?.value,
      email?.current?.value,
      password.current.value
    );

    const message = checkValidData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    console.log("message::::::", message);
    if (message) return;
    //sign/sign up
    //sign
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user::", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      console.log("Inside else");

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user::::", user);
          navigate("/browse");
          //
          updateProfile(auth.currentUser, {
            displayName: name?.current?.value,
            photoURL: nidhi_propic_pic,
          })
            .then((data) => {
              console.log("Profile updated---------------->", data);
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log(uid, " ", email, " ", displayName, " ", photoURL);
              dispatch(addUser({ uid, email, displayName, photoURL }));

              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          //
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  console.log("LOGIN COMP RENDERING ENDED");
  return (
    <>
      <Header />
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
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
                  ref={name}
                />
              )}

              <input
                type="text"
                placeholder="Email or mobile number"
                className="w-full p-4 my-4 bg-gray-700 rounded-lg"
                ref={email}
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full p-4 my-4 bg-gray-700 rounded-lg"
                ref={password}
              />
              <p className="text-red-500 font-bold text-lg py-2">
                {errorMessage}
              </p>
              <button
                className="w-full p-4 my-6 bg-red-900 rounded-lg"
                onClick={handleBtnClick}
              >
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
      </form>
      <img
        src={home_background_logo}
        alt="background-image"
        className="absolute top-0"
      />
    </>
  );
};

export default Login;
