import { useCallback, useState } from "react";
import { searchLocationsForCity, searchLocationsCurrent } from "../services/locations";

export function useLocations ({search}) {
    const [locations, setLocations] = useState([])
    const [currents, setCurrents] = useState([])
    const fetchLocations = useCallback(async () => {
        const newLocations = await searchLocationsForCity({search})        
        setLocations(Array.isArray(newLocations) ? newLocations : [newLocations]);
    }, [search])


    const fetchLocationsCurrent = useCallback(async () => {
        const newLocations = await searchLocationsCurrent({search})
        setCurrents(Array.isArray(newLocations) ? newLocations : [newLocations]);
    }, [search])

    return {locations, currents, fetchLocations, fetchLocationsCurrent}
}