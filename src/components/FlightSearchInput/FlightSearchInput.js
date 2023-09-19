import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { updateOriginAirport, getOriginAirport } from '../../redux/originAirportReducer';
import { updateDestinationAirport, getDestinationAirport } from '../../redux/destinationAirportReducer';
import { updateStartDate, getStartDate } from '../../redux/startDateReducer';
import { updateEndDate, getEndDate } from '../../redux/endDateReducer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './FlightSearchInput.module.scss';
import { Link } from 'react-bootstrap';
import { Button } from "react-bootstrap";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const FlightSearchInput = () => {

  const dispatch = useDispatch();
  //useEffect(() => {
  //  dispatch(updateOriginAirport(''));
  //}, [] );

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSearch = event => {
    event.preventDefault();
    const newOriginAirport = event.target[0].value;
    dispatch(updateOriginAirport(newOriginAirport));
    //console.log('input value', newOriginAirport);
    const newDestinationAirport = event.target[1].value;
    dispatch(updateDestinationAirport(newDestinationAirport));
    //console.log('input value', newDestinationAirport);
    const newStartDate = startDate.toString();
    dispatch(updateStartDate(newStartDate));
    //console.log('input value', newStartDate);
    const newEndDate = endDate.toString();
    dispatch(updateEndDate(newEndDate));
    //console.log('input value', newEndDate);
  }

  return (
    <div className={styles.flight_search_input}>
      <h3>InputForm component</h3>  
      <form className={styles.flight_search_input_form} onSubmit={handleSearch}>
        <div className={styles.flight_search_input_div}>
          Origin Airport: 
          <input type="text" placeholder="Input origin Airport..." />
        </div>
        <div className={styles.flight_search_input_div}>
          Destination Airport: 
          <input type="text" placeholder="Input destination Airport..." />
        </div>
        <div className={styles.flight_search_input_div}>
          Start Date: 
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date..."
            showWeekNumbers 
            todayButton="Set Today"
            dateFormat="MMMM d, yyyy"
            isClearable={true} />
        </div>
        <div className={styles.flight_search_input_div}>
          End Date:
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Select end date..."
            showWeekNumbers 
            todayButton="Set Today"
            dateFormat="MMMM d, yyyy"
            isClearable={true} />      
        </div>      
        <Link className='col-3 d-flex flex-row justify-content-start align-items-start' to={`/output`}>
          <Button className='col-4 mt-4' variant="primary">
            SEARCH
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default FlightSearchInput;