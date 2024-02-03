/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const [Projects, setProjects] = useState();
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="Projects" className="grid md:grid-cols-3 gap-6 px-5 md:px-0">
      {Projects?.map((pro) => (
        <div key={pro.id}>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={pro?.image} alt="Shoes" className="h-[222px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{pro.title}</h2>
              <p>{pro.description.slice(0, 200)}</p>
              <div className="card-actions justify-center gap-4">
                <NavLink to={pro.repo}>
                <div className="group relative">
                  <button>
                    <svg
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </button>
                  <span
                    className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
                  >
                     Repo<span></span>
                  </span>
                </div>
                </NavLink>
                <NavLink to={pro.live}>
                <div className="group relative">
                  <button className="hover:text-blue-500 hover:font-bold">
                    Live
                  </button>
                  <span
                    className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
                  >
                     LiveLink<span></span>
                  </span>
                </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
