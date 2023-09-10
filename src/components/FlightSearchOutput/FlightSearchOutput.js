import { PERSONAL_API_KEY } from '../../API_KEYS/API_KEYS';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from "react-redux";
import { updateOriginAirport, getOriginAirport } from '../../redux/originAirportReducer';
import { updateDestinationAirport, getDestinationAirport } from '../../redux/destinationAirportReducer';
import { updateStartDate, getStartDate } from '../../redux/startDateReducer';
import { updateEndDate, getEndDate } from '../../redux/endDateReducer';
import { updateSearchResponse, getSearchResponse } from '../../redux/searchResponseReducer';

const FlightSearchOutput = () => {

  const dispatch = useDispatch();

  const originAirport = useSelector(state => getOriginAirport(state));
  //console.log('originAirport from store', originAirport);
  const destinationAirport = useSelector(state => getDestinationAirport(state));
  //console.log('destinationAirport from store', destinationAirport);
  const startDate = useSelector(state => getStartDate(state));
  //console.log('startDate from store', startDate);
  const endDate = useSelector(state => getEndDate(state));
  //console.log('endDate from store', endDate);
  const searchResponse = useSelector(state => getSearchResponse(state));
  //console.log('searchResponse from store', searchResponse);

  const searchFlights = async (originAirport, destinationAirport, startDate, endDate) => {
    const url = `https://flight-info-api.p.rapidapi.com/schedules?version=v1&DepartureDate=${startDate}&ArrivalDate=${endDate}&DepartureAirport=${originAirport}&ArrivalAirport=${destinationAirport}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': PERSONAL_API_KEY,
        'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    try {
	    const response = await fetch(url, options);
	    const result = await response.text();
	    console.log(result);
      dispatch(updateSearchResponse(result));
    } catch (error) {
	    console.error(error);
      return error;
    }
  }

  return (
    <div>
      <h3>FlightSearchOutput component</h3>  
      <div>
        <h4>Search Results: under construction</h4>
        <p>origin airport: {originAirport}</p>
        <p>destination airport: {destinationAirport}</p>
        <p>start date: {startDate}</p>
        <p>end date: {endDate}</p>
        <h4>Search Results API request:</h4>
        <button onClick={searchFlights}>SEARCH</button>
        <p>{searchResponse}</p>
      </div>
    </div>
  );
}
  
export default FlightSearchOutput;