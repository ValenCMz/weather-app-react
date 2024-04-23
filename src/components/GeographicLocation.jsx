/* eslint-disable react/prop-types */

export function ListOfLocations({ locations }) {
    console.log("ListOfLocation", locations);
    return (
        <ul className="cont_location">
            {locations.map(location => (
                <li key={location.id} className="location">
                    <p>{location.country}</p>
                    <p>{location.name}</p>
                </li>
            ))}
        </ul>
    );
}



export function GeographicLocation({ locations }) {
    console.log("GeographicLocation", locations);
    const hasLocations = locations?.length > 0;
    console.log(hasLocations)
    return (
        hasLocations ? (<ListOfLocations locations={locations}></ListOfLocations>)
            : (
                <p>No locations found</p>
            )
    );
}


