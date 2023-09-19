import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import FlightSearchInput from './components/FlightSearchInput/FlightSearchInput';
import FlightSearchOutput from './components/FlightSearchOutput/FlightSearchOutput';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
      <Routes>
          <Route path="/" element={<FlightSearchInput />} />
          <Route path="/output" element={<FlightSearchOutput />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
}

export default App;