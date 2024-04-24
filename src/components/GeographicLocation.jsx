/* eslint-disable react/prop-types */
import { useWeatherIcons } from "../hooks/useWeatherIcons"
import "./GeographicLocation.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTemperatureHigh, faWind } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
export function LocationMain({ locations }) {
    const { getWeatherIcon } = useWeatherIcons()
    return (
        <section className="cont-weather-main">
                        <div className="">
                            {locations.map(location => (
                                <div key={location.data.city.id}>
                                    <div className="cont-city">
                                        <h2>{location.data.city.name}</h2>    
                                        <p>{location.data.city.country}</p> 

                                        <div className="temperature_humidity-main">
                                            <div>
                                                <FontAwesomeIcon icon={faTemperatureHigh} />
                                                <p>{Math.round(location.data.mappedList[0].main.temp -  273.15)}°C</p>  
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon={faWind} />
                                                <p>{location.data.mappedList[0].wind.speed}m/s</p>
                                            </div>
                                        </div>

                                    </div>
                                    
                                    <div className="cont-weatherIcon-main">
                                        <div>
                                            {/* Solo estoy renderizando la imagen con del primer clima */}
                                            {getWeatherIcon(location.data.mappedList[0].weather[0].main)()}
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
            
 
 {/*<ul className="cont_location">
                {locations.map(location => (
                    <li key={location.data.city.id} className="location">
                        {location.data.mappedList.map((mappedItem, index) => (
                            <div key={index}>
                                <p>{mappedItem.main.temp}</p>                            
                                <p>{mappedItem.weather[0].main}</p>
                               
                            </div>   
                        ))}
                    </li>
                ))}
            </ul>*/}
            
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


