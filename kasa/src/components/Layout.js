import { Routes, Route  } from "react-router-dom";
//components Header && Footer
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Banner from 'components/Banner/Banner';

import Home from 'pages/Home/Home';

function Layout() {
  return (
    <div className="Layout">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );  
}


export default Layout;
