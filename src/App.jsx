import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
// import ComingSoon from './Pages/ComingSoon';
import Form from './Components/Form';
import GetStarted from './Pages/GetStarted';

function App() {

  // Array.from(document.querySelectorAll("*")).forEach((el) => {
  //   if (el.scrollWidth > el.clientWidth) {
  //     console.log("Overflowing element:", el);
  //     el.style.border = "2px solid yellow";  // Optional: adds a border for visual identification
  //   }
  // });
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}

        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
