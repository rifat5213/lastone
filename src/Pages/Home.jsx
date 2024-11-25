import AboutUs from "../Components/AboutUs";
import ContactSection from "../Components/ContactSection";
import Departments from "../Components/Departments";
import NoticeBoard from "../Components/NoticeBoard";
import Slider from "../Components/Slider";
import VideoSection from "../Components/VideoSection";

const Home = () => {
    return (
        <div>
            <Slider/>
            <AboutUs/>
            <NoticeBoard/>
            <ContactSection/>
            <Departments/>
            <VideoSection/>
        </div>
    );
};

export default Home;