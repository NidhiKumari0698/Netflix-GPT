import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { home_background_logo } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img
        src={home_background_logo}
        alt="background-image"
        className="absolute top-0"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
