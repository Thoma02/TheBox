import './App.css';
import Header from './components/Sections/Header/Header';
import OurMission from './components/Sections/OurMission/OurMission';
import OurReputation from './components/Sections/OurReputation/OurReputation';
import AboutUs from './components/Sections/AboutUs/AboutUs';
import Services from './components/Sections/Services/Services';
import Experience from './components/Sections/Experience/Experience';
import Consultation from './components/Sections/Consultation/Consultation';
import Projects from './components/Sections/Projects/Projects';
import Form from './components/Sections/Form/Form';
import Footer from './components/Sections/Footer/Footer';
import Trademark from './components/Sections/Trademark/Trademark';

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
      <Projects />
      <Form />
      <Footer />
      <Trademark />
    </>
  );
}

export default App;
