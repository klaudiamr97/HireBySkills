import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

interface HeroProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imgSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imgSrc,
}) => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="w-screen overflow-hidden flex items-center justify-between bg-body py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
        <div className="w-full md:w-1/2 md:pl-0 pl-4">
          {title && (
            <h1 className="mb-12 text-4xl md:text-5xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none w-2/3">
              {title}
            </h1>
          )}
          {description && (
            <p className="mb-11 text-base md:text-lg lg:text-lg md:max-w-md w-2/3">
              {description}
            </p>
          )}
          {!isLoggedIn && buttonText && buttonLink && (
            <div className="w-full md:w-auto mb-8">
              <Link
                to={buttonLink}
                className="items-center py-2 px-5 md:py-3 md:px-7 w-full text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200 text-sm md:text-base"
              >
                {buttonText}
              </Link>
            </div>
          )}
        </div>
        {imgSrc && (
          <div className="w-full md:w-1/2 p-8 hidden md:block">
            <img
              className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
              src={imgSrc}
              alt="hero-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
