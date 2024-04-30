import { useId } from "react"
import { useSearch } from "../hooks/useSearch"
import { useLocations } from "../hooks/useLocations"
import { GeographicLocation } from "./GeographicLocation"
import "./Filter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export function Filter() {
    const {search, setSearch} = useSearch()
    const {locations, currents,fetchLocations, fetchLocationsCurrent } = useLocations({search})
    const cityId = useId()

    const handleChangeCity = (event) => {
        const newSearch = {city: event.target.value}
        setSearch(newSearch)
    }

    const handleClickLocation = (event) => {
        event.preventDefault()
        fetchLocations(search)
        fetchLocationsCurrent(search)
    }

    return(        
        <section className="main">
            <h1 className="title-weather">Weather</h1>
            <section className="filters">              
                <div className="search-container">
                <input className="input-city" type="text"
                        id={cityId}
                        name="city"
                        placeholder="City"
                        onChange={handleChangeCity}
                    />                    
                <button onClick={handleClickLocation}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </section>
            <GeographicLocation locations={locations} currents={currents}></GeographicLocation>
    
        </ section>

    )
 
}