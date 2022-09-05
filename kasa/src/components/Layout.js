import { Routes, Route  } from "react-router-dom";
//components Header && Footer
import Navbar from 'components/Navbar/Navbar';
// import Footer from './components/Footer';
// import Banner from './components/Banner';
import Home from 'pages/Home/Home';

function Layout() {
  return (
    <div className="Layout">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );  
}


export default Layout;
