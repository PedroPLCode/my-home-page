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
import { Link } from 'react-router-dom';
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
  dispatch(updateStartDate(startDate.toString()));
  dispatch(updateEndDate(endDate.toString()));

  const handleUpdateStartDate = date => {
    setStartDate(date);
    dispatch(updateStartDate(startDate.toString()));
  }

  const handleUpdateEndDate = date => {
    setEndDate(date);
    dispatch(updateEndDate(endDate.toString()));
  }

  return (
    <div className="m-5 d-flex flex-column justify-content-center align-items-center gap-4">
      <h3>FlightSearchInput component</h3>  
      <form className="d-flex flex-column justify-content-center align-items-center gap-4">
        <div className="d-flex flex-row justify-content-between align-items-between gap-2">
          <h5>Origin Airport</h5> 
          <input type="text" placeholder="Input origin Airport..." onChange={event => dispatch(updateOriginAirport(event.target.value))}/>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-between gap-2">
          <h5>Destination Airport</h5>
          <input type="text" placeholder="Input destination Airport..." onChange={event => dispatch(updateDestinationAirport(event.target.value))}/>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-between gap-2">
          <h5>Start Date</h5>
          <DatePicker
            selected={startDate}
            onChange={(date) => handleUpdateStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date..."
            showWeekNumbers 
            todayButton="Set Today"
            dateFormat="MMMM d, yyyy" />
        </div>
        <div className="d-flex flex-row justify-content-between align-items-between gap-2">
          <h5>End Date</h5>
          <DatePicker
            selected={endDate}
            onChange={(date) => handleUpdateEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Select end date..."
            showWeekNumbers 
            todayButton="Set Today"
            dateFormat="MMMM d, yyyy" />      
        </div>      
      </form>
      <Link className='col-12 d-flex flex-row justify-content-center align-items-center' to={`/output`}>
        <Button className='col-1' variant="primary">
          SEARCH
        </Button>
      </Link>
    </div>
  );
}

export default FlightSearchInput;