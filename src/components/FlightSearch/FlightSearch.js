import FlightSearchInput from '../FlightSearchInput/FlightSearchInput';
import FlightSearchOutput from '../FlightSearchOutput/FlightSearchOutput';
import styles from './FlightSearch.module.scss'

const FlightSearch = () => {

  return (
    <div className={styles.flight_search} >
      <header>
        <h2>Flight Search App</h2>
      </header>
      <FlightSearchInput />
      <FlightSearchOutput />
    </div>
  );
}

export default FlightSearch;