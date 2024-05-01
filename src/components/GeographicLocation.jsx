/* eslint-disable react/prop-types */
import "./GeographicLocation.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTemperatureHigh, faWind } from '@fortawesome/free-solid-svg-icons'
import { useId } from "react"
import { WeatherIcon } from "./WeatherIcon"

const getDayOfWeek = (dateString) => {
    if(dateString.includes(":")){
        dateString = dateString.split(":")[0]
    }
    const date = new Date(dateString)
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = date.getDay()
    return dayOfWeek[day]
}

// eslint-disable-next-line react/prop-types
export function LocationMain({ currents }) {
    const currentId = useId()
    return (
            <div>
                {currents.map(current => (
                    <div key={currentId}>
                        <div className="cont-city">
                            <h2>{current.city}</h2>    
                            <p>{current.country}</p>                         
                            <p>{getDayOfWeek(current.datetime)}</p>                    
                        </div>
                        
                        <div className="cont-weatherIcon-main">
                            <div>
                                {<WeatherIcon icon={current.weather.icon}></WeatherIcon>}
                            </div>
                        </div>    

                        <div className="temperature_humidity-main">
                                <div>
                                    <FontAwesomeIcon icon={faTemperatureHigh} />
                                    <p><span>{Math.round(current.temp)}°C</span></p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faWind} />
                                    <p>{Math.round(current.wind * 3.6)} Km h</p>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
            
    )
}


/* eslint-disable react/prop-types */
export function ListOfLocations({ locations }) {    
    return (
        <ul className="listoflocations">
            {locations && locations[0] && locations[0].data.mappedList && locations[0].data.mappedList.map((location, index) => (
                    <li key={index}>
                        <p>{getDayOfWeek(location.datetime)}</p>
                        <div>
                            {<WeatherIcon icon={location.weather.icon}></WeatherIcon>}
                        </div>

                        <div>
                            <p><span style={{ color: '#cf023b' }}>{Math.round(location.temp_max)}°C</span> / <span style={{ color: '#028c9e' }}>{Math.round(location.temp_min)}°C</span></p>
                        </div>

                        <div className="listoflocations-wind">                                    
                            <FontAwesomeIcon icon={faWind} />
                            <p>{Math.round(location.wind * 3.6)} Km h</p>
                        </div>
                    </li>                        
            ))}
        </ul>
    );
}

export function GeographicLocation({ locations, currents }) {
    const hasLocations = locations?.length > 0 || currents?.length > 0;

    return (
        hasLocations ? (
            <>
                <div className="cont-weather-main">
                    <LocationMain currents={currents} />
                </div>
                <div className="list-of-locations-container">
                    <ListOfLocations locations={locations} />
                </div>
            </>
        )
        : (
            <p>No locations found</p>
        )
    );
}


