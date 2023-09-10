import Container from './components/Container/Container';
import FlightSearch from './components/FlightSearch/FlightSearch';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
//import { Routes, Route } from 'react-router-dom';
//import Container from './components/Container/Container'
//import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <FlightSearch />
      </Container>
      <Footer />
    </main>
  );
}

export default App;

/*
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
*/