import { netflix_logo } from "../utils/constants";
const Header = () => {
  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black relative z-10">
      <img src={netflix_logo} alt="netflix logo" className="w-44" />
    </div>
  );
};

export default Header;
