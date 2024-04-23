import { useCallback, useState } from "react";
import { searchLocationsForCityAndCountry } from "../services/locations";

export function useLocations ({search}) {
    const [locations, setLocations] = useState([])

    const fetchLocations = useCallback(async () => {
        const newLocations = await searchLocationsForCityAndCountry({search})
        console.log("fetchLocations", newLocations)
        setLocations(Array.isArray(newLocations) ? newLocations : [newLocations]);
    }, [search])

    return {locations, fetchLocations}
}