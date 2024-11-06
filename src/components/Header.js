import {
  netflix_logo,
  SUPPORTED_LANGUAGES,
  user_icon,
} from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (event) => {
    //console.log(event.target.value);
    dispatch(changeLanguage(event.target.value));
  };
  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-full absolute">
      <img src={netflix_logo} alt="netflix logo" className="w-44" />
      {selector && (
        <div className="flex items-center">
          {showGptSearch && (
            <select
              className="p-2 rounded-lg bg-gray-400 text-white"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 m-2 bg-purple-800 text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
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
