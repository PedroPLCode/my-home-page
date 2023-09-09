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

// Jeden input date range czy dwa start i end ?

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const FlightSearchInput = () => {

  const dispatch = useDispatch();
  //useEffect(() => {
  //  dispatch(updateOriginAirport(''));
  //}, [] );

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

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
    <div>
      <h3>InputForm component</h3>  
      <form onSubmit={handleSearch}>
        Origin Airport: <input type="text" 
                        placeholder="Select origin Airport..." />
        Destination Airport: <input type="text" 
                        placeholder="Select destination Airport..." />
        Dates Range: <DatePicker
                        placeholderText="Select a date range..."
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        monthsShown={1}
                        onChange={(update) => {setDateRange(update)}}
                        isClearable={true}
                        dateFormat="MMMM d, yyyy"
                        todayButton="Set Today"
                        /* withPortal */
                        showWeekNumbers />
        <button>Search For Flights</button>
      </form>
    </div>
  );
}

export default FlightSearchInput;