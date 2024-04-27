/* eslint-disable react/prop-types */
import { useWeatherIcons } from "../hooks/useWeatherIcons"
import "./GeographicLocation.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTemperatureHigh, faWind } from '@fortawesome/free-solid-svg-icons'
import { useId } from "react"

// eslint-disable-next-line react/prop-types
export function LocationMain({ locations }) {
    const { getWeatherIcon } = useWeatherIcons()
    const locationId = useId()
    console.log("LocationMain", locations)

    return (
        <section className="cont-weather-main">
                        <div className="">
                            {locations.map(location => (
                                <div key={locationId}>
                                    <div className="cont-city">
                                        <h2>{location.data.city.city}</h2>    
                                        <p>{location.data.city.country}</p> 
                                        <p>{location.data.mappedList[0].datetime}</p>
                                        <div className="temperature_humidity-main">
                                            <div>
                                                <FontAwesomeIcon icon={faTemperatureHigh} />
                                                <p>{Math.round(location.data.mappedList[0].temp)}°C</p>  
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon={faWind} />
                                                <p>{location.data.mappedList[0].wind}m/s</p>
                                            </div>
                                        </div>

                                    </div>
                                    
                                    <div className="cont-weatherIcon-main">
                                        <div>
                                            {/* Solo estoy renderizando la imagen con del primer clima */}
                                            {getWeatherIcon(location.data.mappedList[0].weather.code)()}
                                        </div>
                                    </div>    
                                
                                </div>
                            ))}
                        </div>
            </section>
    )
}


/* eslint-disable react/prop-types */
export function ListOfLocations({ locations }) {
    console.log("ListOfLocations", locations)
    return (
        <>
            {/* Tengo que recorrer desde la pos 1 hasta la ultima */}
 
            {/* {<ul className="cont_location">
                {locations.map.slice(1,5)(location => (
                    <li key={location.data.city.id}>
                        <p>{location}</p>
                    </li>

                ))}
            </ul>} */}
            
        </>
    );
}

export function GeographicLocation({ locations }) {
    const hasLocations = locations?.length > 0;
    return (
        hasLocations ? (<ListOfLocations locations={locations}></ListOfLocations> && <LocationMain locations={locations}></LocationMain>)
            : (
                <p>No locations found</p>
            )
    );
}


