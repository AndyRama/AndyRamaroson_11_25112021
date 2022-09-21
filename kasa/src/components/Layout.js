import { Routes, Route } from "react-router-dom";
import Navbar from 'components/Navbar/Navbar';

import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import PageNotFound from "pages/PageNotFound/PageNotFound";

function Layout() {

  return (
    <div className="Layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );  
}



export default Layout;
