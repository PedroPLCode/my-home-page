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
  const destinationAirport = useSelector(state => getDestinationAirport(state));
  const startDate = useSelector(state => getStartDate(state));
  const endDate = useSelector(state => getEndDate(state));
  const searchResponse = useSelector(state => getSearchResponse(state));

  //YYYY-MM-DDTHH:MM

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
  searchFlights();

  if (!searchResponse) {}
  return (
    <div className="m-5 d-flex flex-column justify-content-center align-items-center gap-4">
      <h3>FlightSearchOutput component</h3>  
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4>Search Parameters</h4>
        <p><strong>origin airport:</strong> {originAirport}</p>
        <p><strong>destination airport:</strong> {destinationAirport}</p>
        <p><strong>start date:</strong> {startDate}</p>
        <p><strong>end date:</strong> {endDate}</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4>Search Results</h4>
        <p>{searchResponse}</p>
      </div>
    </div>
  );
}
  
export default FlightSearchOutput;