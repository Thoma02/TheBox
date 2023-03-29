import './App.css';
import Header from './components/Sections/Header/Header';
import OurMission from './components/Sections/OurMission/OurMission';
import OurReputation from './components/Sections/OurReputation/OurReputation';
import AboutUs from './components/Sections/AboutUs/AboutUs';
import Services from './components/Sections/Services/Services';
import Experience from './components/Sections/Experience/Experience';
import Consultation from './components/Sections/Consultation/Consultation';

function App() {
  return (
    <>
      <Header />
      <OurMission />
      <OurReputation />
      <AboutUs />
      <Services />
      <Experience />
      <Consultation />
    </>
  );
}

export default App;
