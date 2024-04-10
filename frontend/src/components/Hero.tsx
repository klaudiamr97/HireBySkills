import { Link } from "react-router-dom";

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
  return (
    <div className="w-screen flex items-center justify-between bg-body py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 ">
          {title && (
            <h1 className="mb-12 text-5xl md:text-5xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">
              {title}
            </h1>
          )}
          {description && (
            <p className="mb-11 text-lg black-font  md:max-w-md">
              {description}
            </p>
          )}
          {buttonText && buttonLink && (
            <div className="w-full md:w-auto mb-8">
              <Link
                to={buttonLink}
                className="items-center py-3 px-7 w-full text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
              >
                {buttonText}
              </Link>
            </div>
          )}
        </div>
        {imgSrc && (
          <div className="w-full md:w-1/2 p-8">
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
