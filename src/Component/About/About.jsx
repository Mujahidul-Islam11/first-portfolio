const About = () => {
  // Sample data (replace with your actual data)
  const profileData = {
    name: ": Mohammad Mojahidul Islam",
    education: ": Computer Science Engineering",
    birth: ": 12/10/2005",
    location: ": Bangladesh, Chattogram",
    desc: ": I am Mojahidul, a first-semester Computer Science student at Shyamoli Ideal Polytechnic Institute.",
    exp: ": I am working In the Programming field since seven months",
  };

  return (
    <div
      id="About"
      className="w-3/4 bg-[#4F6D7A] my-10 md:flex items-center mx-auto rounded-xl overflow-hidden shadow-lg p-6"
    >
      <div className="md:w-1/2">
        <img
          className="mx-auto mb-4"
          src="https://i.postimg.cc/9QY7sm7F/01022023-11rwfdfe5411-redfdmovebg-preview.png"
          alt="Profile"
        />
      </div>
      <div className="md:w-1/2">
        <div className="border rounded-lg py-6 pl-5">
          <h2 className="md:text-2xl mb-3">
            <span className="font-semibold text-white">Name</span>{" "}
            {profileData.name}
          </h2>
          <p className="md:text-2xl mb-3">
            <span className="font-semibold text-white">Birth</span>{" "}
            {profileData.birth}
          </p>
          <p className="md:text-2xl mb-3">
            <span className="font-semibold text-white">Education</span>{" "}
            {profileData.education}
          </p>
          <p className="md:text-2xl mb-3">
            <span className="font-semibold text-white">Experience</span>{" "}
            {profileData.exp}
          </p>
          <p className="md:text-2xl mb-3">
            <span className="font-semibold text-white">Location</span>{" "}
            {profileData.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
