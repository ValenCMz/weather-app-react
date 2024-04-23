import { useId } from "react"
import { useSearch } from "../hooks/useSearch"
import { useLocations } from "../hooks/useLocations"
import { GeographicLocation } from "./GeographicLocation"

export function Filter() {
    const {search, setSearch} = useSearch()
    const {locations, fetchLocations} = useLocations({search})
    const cityId = useId()
    const countryId = useId()

    const handleChangeCity = (event) => {
        const newSearch = {city: event.target.value, country: search.country}
        setSearch(newSearch)
    }

    const handleChangeCountry = (event) => {
        const newSearch = {city: search.city, country: event.target.value}
        setSearch(newSearch)
    }

    const handleClickLocation = (event) => {
        event.preventDefault()
        fetchLocations(search)
    }

    return(
        <>
            <section className="filters">
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text"
                        id={cityId}
                        name="city"
                        placeholder="City"
                        onChange={handleChangeCity}
                    />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input type="text"
                        id={countryId}
                        name="country"
                        placeholder="Country"
                        onChange={handleChangeCountry}
                    />
                </div>
                <input type="button" value='Search' onClick={handleClickLocation}/>
            </section>

            <h1>{locations}</h1>
            <GeographicLocation locations={locations}></GeographicLocation>
    
        </>

    )
 
}