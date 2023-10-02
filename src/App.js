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

const App = () => {
  
  return (
    <main>
      <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/aboutme" element={<AboutMePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      <Footer />
    </main>
  );
}

export default App;