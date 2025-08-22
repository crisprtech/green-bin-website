import Header from "../src/pages/landingPage/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EducationalPlatform from "./pages/ResearchRepo/Educational";
import ApplyNow from "./pages/ideaSafari/ApplyNow";
import IdeaSafari from "./pages/ideaSafari/IdeaSafari";
import GreenCarbonPoints from "./pages/GreenCarbonPoints/GreenCarbon";
import GreenBinDAO from "./pages/GreenCarbonPoints/GreenBinDAO";
import LeaderBoard from "./pages/GreenCarbonPoints/Leaderboard";
import UploadResearch from "./pages/ResearchRepo/Labs&Testimonials";
import SmartAIBins from "./pages/greenAIBins/wasteManagement";
import RegisterPage from "./pages/authentication/RegisterPage";
import LoginPage from "./pages/authentication/LoginPage";
import LandingPage from "./pages/landingPage/LandingPage";
import ResearchRepository from "./pages/ResearchRepo/ResearchRepo";
import ResearchLabs from "./pages/ResearchRepo/ResearchLabs";
import BlogScreen from "./pages/ResearchRepo/Blogs";
import JoinUs from "./pages/JoinUs";
import ServiceDashBoard from "./pages/GreenCarbonPoints/OtherServices/DashBoard";
import AboutFellowship from "./pages/wasteFellowship/AboutFellowship";
import HelpCenter from "./pages/ResearchRepo/HelpCenter";
import OurTeam from "./pages/OurTeam";
import OurServices from "./pages/Services";
import DonatePage from "./pages/Donate";
import ContactUs from "./pages/ContactUs";
import JoinOurTeam from "./pages/JoinTeam";
import PageNotFound from "./pages/PageNotFound";
import Bootcamps from './pages/GreenDashBoard/Bootcamps'; 
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/ResearchRepo/ResearchRepository"
          element={<ResearchRepository />}
        />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route
          path="/GreenCarbonPoints/OtherServices/DashBoard"
          element={<ServiceDashBoard />}
        />
        <Route
          path="/GreenCarbonPoints/GreenBinDAO"
          element={<GreenBinDAO />}
        />
        <Route
          path="/GreenDashBoard/Bootcamps"
          element={<Bootcamps />}
        />

        <Route
          path="/GreenCarbonPoints/Leaderboard"
          element={<LeaderBoard />}
        />


        <Route
          path="/GreenCarbonPoints/GreenCarbon"
          element={<GreenCarbonPoints />}
        />
        <Route path="/authentication/RegisterPage" element={<RegisterPage />} />
        <Route path="/authentication/LoginPage" element={<LoginPage />} />
        <Route
          path="/wasteFellowship/AboutFellowship"
          element={<AboutFellowship />}
        />
        <Route path="/ideaSafari/ApplyNow" element={<ApplyNow />} />
        <Route path="/ideaSafari/IdeaSafari" element={<IdeaSafari />} />
        <Route
          path="/ResearchRepo/Educational"
          element={<EducationalPlatform />}
        />
        <Route path="/ResearchRepo/Blogs" element={<BlogScreen />} />
        <Route path="/ResearchRepo/ResearchLabs" element={<ResearchLabs />} />
        <Route
          path="/ResearchRepo/ResearchRepo"
          element={<ResearchRepository />}
        />
        <Route
          path="/ResearchRepo/UploadResearch"
          element={<UploadResearch />}
        />
        <Route path="/greenAIBins/wasteManagement" element={<SmartAIBins />} />
        <Route path="/ResearchRepo/HelpCenter" element={<HelpCenter />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Services" element={<OurServices />} />
        <Route path="/Donate" element={<DonatePage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/JoinTeam" element={<JoinOurTeam />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
