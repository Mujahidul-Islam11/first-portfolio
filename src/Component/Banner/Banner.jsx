

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen text-white bg-[#4F6D7A]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content">
          <div className="md:flex justify-between items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-2">
                <i>Greetings!</i>
              </h2>
              <h2 className="text-xl">
                I'm Mojahidul, a junior front-end developer skilled in the art
                of Tailwind CSS. Combined with the power of ReactJS, I create
                sleek and responsive web pages that strike the perfect balance
                between form and function. I am also familiar with some basics
                of back end tools like expressJs, NodeJs and MongoDB
              </h2>
              <a href="../../../public/SCIC ASSIGNMENT NUMBER TWO.pdf" download={'SCIC ASSIGNMENT NUMBER TWO.pdf'}><button className="btnResume mt-5">
                Download Resume
              </button></a>
            </div>
            <img
              className="mt-4 md:flex rounded-full border-4 border-[#F4CE14]"
              src="https://i.postimg.cc/YC8gS16r/Whats-App-Image-2023-0df8-20-at-18-50-35-removebg-preview.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
