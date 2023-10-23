import { React, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';
import MainPage from './components/pages/MainPage/MainPage';
import ContactPage from './components/pages/ContactPage/ContactPage';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import AboutMePage from './components/pages/AboutMePage/AboutMePage';
import PortfolioPage from './components/pages/PortfolioPage/PortfolioPage';
import SinglePortfolioProjectDetails from './components/features/SinglePortfolioProjectDetails/SinglePortfolioProjectDetails';
import clsx from 'clsx';

const App = () => {

  const [footerIconHover, setFooterIconHover] = useState(false);
  const [hamburgerHover, setHamburgerHover] = useState(false);

  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);
  
  const changeBackgroundTextOn = () => {
    setFooterIconHover(true);
  }

  const changeBackgroundTextOff = () => {
    setFooterIconHover(false);
  }

  const changeBackgroundGradientOn = () => {
    setHamburgerHover(true);
  }

  const changeBackgroundGradientOff = () => {
    setHamburgerHover(false);
  }

  return (
    <main className={clsx(hamburgerHover ? 'hamburger_hover' : 'hamburger_NOThover')}>
      <NavBar changeBackgroundTextOn={changeBackgroundTextOn} changeBackgroundTextOff={changeBackgroundTextOff} changeBackgroundGradientOn={changeBackgroundGradientOn} changeBackgroundGradientOff={changeBackgroundGradientOff} />
        <Container className='containter_background'>
          <div className={clsx('main_background', footerIconHover ? 'background_text_active' : '')}>
            <h2>&lt;piotr.gaszczyński&gt;</h2>
            <h2>&lt;/frontend developer&gt; </h2>
          </div>
          <div
            className={clsx(`${transitionStage}`, 'main_content')}
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
              <Route path="/portfolio/:projectId" element={<SinglePortfolioProjectDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </Container>
      <Footer changeBackgroundTextOn={changeBackgroundTextOn} changeBackgroundTextOff={changeBackgroundTextOff} />
    </main>
  );
}

export default App;