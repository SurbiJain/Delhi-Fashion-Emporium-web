
import './App.css';
// import Navbar from './components/navbar';
import Section1 from './components/section1';
import Services from './components/services';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Section6 from './components/section6';
import Section8 from './components/section8';
import Section7 from './components/section7';
import NewNav from './components/navbar/newNav';


function App() {
  return (
    <div className="App">
      <NewNav/>
      <Section1/>
      <Services/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
    </div>
  );
}

export default App;
