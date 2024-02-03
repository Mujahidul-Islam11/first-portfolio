import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import Home from "../Component/Home/Home";
import Headroom from "react-headroom";


const LayOut = () => {
    return (
        <div>
            <Headroom>
            <Navbar></Navbar>
            </Headroom>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;