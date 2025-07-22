import './App.css';
import Header from '../src/pages/landingPage/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EducationalPlatform from './pages/ResearchRepo/Educational';
import ApplyNow from './pages/ideaSafari/ApplyNow';
import IdeaSafari from './pages/ideaSafari/IdeaSafari';
import GreenCarbonPoints from './pages/GreenCarbonPoints/GreenCarbon';
import UploadResearch from './pages/ResearchRepo/Labs&Testimonials';
import SmartAIBins from './pages/greenAIBins/wasteManagement';
import RegisterPage from './pages/authentication/RegisterPage'
import LoginPage from './pages/authentication/LoginPage'
import LandingPage from './pages/landingPage/LandingPage'
import ResearchRepository from './pages/ResearchRepo/ResearchRepo';
import ResearchLabs from './pages/ResearchRepo/ResearchLabs';
import BlogScreen from './pages/ResearchRepo/Blogs';
import JoinUs from './pages/JoinUs';
import ServiceDashBoard from './pages/GreenCarbonPoints/OtherServices/DashBoard';
import AboutFellowship from './pages/wasteFellowship/AboutFellowship';
import  HelpCenter from './pages/ResearchRepo/HelpCenter';
import OurTeam from './pages/OurTeam';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ResearchRepo/ResearchRepository" element={<ResearchRepository />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/GreenCarbonPoints/OtherServices/DashBoard" element={<ServiceDashBoard />} />
        <Route path="/GreenCarbonPoints/GreenCarbon" element={<GreenCarbonPoints />} />
        <Route path="/authentication/RegisterPage" element={<RegisterPage />} />
        <Route path="/authentication/LoginPage" element={<LoginPage />} />
        <Route path="/wasteFellowship/AboutFellowship" element={<AboutFellowship />} />
        <Route path="/ideaSafari/ApplyNow" element={<ApplyNow />} />
        <Route path="/ideaSafari/IdeaSafari" element={<IdeaSafari />} />
        <Route path="/ResearchRepo/Educational" element={<EducationalPlatform/>} />
        <Route path="/ResearchRepo/Blogs" element={<BlogScreen />} />
        <Route path="/ResearchRepo/ResearchLabs" element={<ResearchLabs />} />
        <Route path="/ResearchRepo/ResearchRepo" element={<ResearchRepository />} />
        <Route path="/ResearchRepo/UploadResearch" element={<UploadResearch />} />
        <Route path="/greenAIBins/wasteManagement" element={<SmartAIBins  />} />
        <Route path="/ResearchRepo/HelpCenter" element={<HelpCenter />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        
      </Routes>

    </Router>   
  );
}

export default App;
