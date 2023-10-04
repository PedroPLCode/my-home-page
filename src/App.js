import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import ContactPage from './components/ContactPage/ContactPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AboutMePage from './components/AboutMePage/AboutMePage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import { Container } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import WaiterApp from './components/portfolio/WaiterApp/WaiterApp';

const App = () => {

  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);
  
  return (
    <main>
      <NavBar />
        <Container>
          <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
              if (transitionStage === "fadeOut") {
                setTransistionStage("fadeIn");
                setDisplayLocation(location);
              }
            }}
          >
            <Routes location={displayLocation}>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<AboutMePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/waiterapp" element={<WaiterApp />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </Container>
      <Footer />
    </main>
  );
}

export default App;