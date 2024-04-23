import { useCallback, useState } from "react";
import { searchLocationsForCityAndCountry } from "../services/locations";

export function useLocations ({search}) {
    const [locations, setLocations] = useState([])

    const fetchLocations = useCallback(async () => {
        console.log("fetchLocations", search)
        const newLocations = await searchLocationsForCityAndCountry({search})
        setLocations(newLocations)
    }, [search])

    return {locations, fetchLocations}
}