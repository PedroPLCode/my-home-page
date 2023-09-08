import React, { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const InputForm = props => {

  //const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleSubmit = event => {

    event.preventDefault();

    //const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);

    //console.log(startDate, endDate)

    props.setSearchResponse(props.searchFlights(props.originAirport, props.destinationAirport, startDate, endDate));
  }

  return (
    <div>
      <h3>InputForm component</h3>  
      <form onSubmit={(event, range) => handleSubmit(event, range)}>
        Origin Airport: <input type="text" 
                        placeholder="Origin Airport" 
                        value={props.originAirport} 
                        onChange={event => props.setOriginAirport(event.target.value)} />
        Destination Airport: <input type="text" 
                        placeholder="Destination Airport" 
                        value={props.destinationAirport} 
                        onChange={event => props.setDestinationAirport(event.target.value)} />
        Dates: <DatePicker selected={startDate} 
                        placeholderText="Select Dates Range" 
                        onChange={ handleSubmit()}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange />
        <button>Search For Flights</button>
      </form>
    </div>
  );
}

export default InputForm;