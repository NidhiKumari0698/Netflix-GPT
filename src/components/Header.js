import { netflix_logo, user_icon } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const selector = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        //  navigate("/");
      })
      .catch((error) => {
        // An error happened.
        //  navigate("/error");
      });
  };
  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-full absolute">
      <img src={netflix_logo} alt="netflix logo" className="w-44" />
      {selector && (
        <div className="flex items-center">
          <img
            alt="usericon"
            src={selector?.photoURL}
            className="w-8 h-8 mx-2"
          />
          <button className="text-white text-lg" onClick={handleSignout}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
