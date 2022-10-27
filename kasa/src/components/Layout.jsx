import { Routes, Route } from "react-router-dom";
import Navbar from 'components/Navbar/Navbar';
import "style.scss"

import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import PageNotFound from "pages/PageNotFound/PageNotFound";
import SingleProduct  from 'pages/SingleProduct/SingleProduct';
// import Footer from 'components/Footer/Footer'

function Layout() {

  return (
    <div className="Layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/logement/:logementId" element={<SingleProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );  
}

export default Layout;
