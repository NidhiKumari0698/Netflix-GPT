import { useDispatch } from "react-redux";
import Header from "./components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //onAuthStateChanged is a event listener which listen event when user is login,signup,logout
  //so we will add listener once hence we add this inside useEffect.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
