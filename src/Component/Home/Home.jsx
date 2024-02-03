import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div id="Home">
            <Banner></Banner>
            <div className="py-6 container mx-auto">
            <h3 className="text-5xl font-bold text-center mt-24 text-[#6c4cdc] mb-10"><i>About Me</i></h3>
            <About></About>
            </div>
            <div className="py-10">
            <h3 className="text-5xl font-bold text-center mt-24 text-[#6c4cdc] mb-10"><i>My Skills</i></h3>
            <Skills></Skills>
            </div>

            <div className="py-6 container mx-auto">
            <h3 className="text-5xl font-bold text-center mt-24 text-[#6c4cdc] mb-10"><i>Projects</i></h3>
            <Projects></Projects>
            </div>
            <div className="py-6 container mx-auto mb-10">
            <h3 className="text-5xl font-bold text-center mt-16 text-[#6c4cdc] mb-10"><i>Lets Connect</i></h3>
            <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;