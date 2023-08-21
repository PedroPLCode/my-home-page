import { useState } from 'react';
import InputForm from '../InputForm/InputForm'
import ShowResults from '../ShowResults/ShowResults'

const Main = () => {

  const [originAirport, setOriginAirport] = useState('');
  const [destinationAirport, setDestinationAirport] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [searchResponse, setSearchResponse] = useState('');

  const searchFlights = async (originAirport, destinationAirport, startDate, endDate) => {
    console.log(originAirport, destinationAirport);
    console.log(startDate, endDate);

    /*
    const url = `https://flight-info-api.p.rapidapi.com/status?version=v1&DepartureDate=2023-08-28&ArrivalDate=2023-08-29&DepartureAirport={${originAirport}&ArrivalAirport=${destinationAirport}`;
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'KEY',
		    'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
	    }
    };

    try {
	    const response = await fetch(url, options);
	    const result = await response.text();
	    console.log(result);
      return result;
    } catch (error) {
	    console.error(error);
      return error;
    }
    */
  }

  return (
    <div>
      <InputForm searchFlights={searchFlights} 
                 setOriginAirport={setOriginAirport} 
                 setDestinationAirport={setDestinationAirport} 
                 setStartDate={setStartDate}
                 setEndDate={setEndDate}
                 setSearchResponse={setSearchResponse} 
                 originAirport={originAirport} 
                 destinationAirport={destinationAirport}
                 startDate={startDate}
                 endDate={endDate} />
      <ShowResults searchFlights={searchFlights} 
                   searchResponse={searchResponse} />
    </div>
  );
}

export default Main;