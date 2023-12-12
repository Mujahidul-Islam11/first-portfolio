import { useEffect } from "react";
import { useState } from "react";

const Skills = () => {
    const [front, setFront] = useState()
    const [backend, setBackend] = useState()
    useEffect(()=>{
        fetch('/frontend.json')
        .then(res => res.json())
        .then(data => setFront(data))
    },[])

    useEffect(()=>{
        fetch('/backend.json')
        .then(res => res.json())
        .then(data => setBackend(data))
    },[])

  return (
    <div className="container mx-auto my-6 md:flex justify-between">
        <div>
        <h3 className="px-5 md:px-0 text-3xl text-white mb-3">Front End</h3>
        <div className="px-5 md:px-0 flex gap-6">
      {
        front?.map(fro =><div key={fro.id}>
        <figure>
          <img
            src={fro.image}
            alt="Shoes"
            className="md:w-24 md:h-24"
          />
        </figure>
        </div>)
      }
    </div>
    
        </div>
        <div>
        <h3 className="px-5 md:px-0 text-3xl text-white mb-3">Familiar</h3>
        <div className="px-5 md:px-0 flex gap-6">
      {
        backend?.map(fro =><div key={fro.id}>
        <figure>
          <img
            src={fro.image}
            alt="Shoes"
            className="md:w-28 md:h-24"
          />
        </figure>
        </div>)
      }
    </div>
    
        </div>
    </div>
  );
};

export default Skills;
