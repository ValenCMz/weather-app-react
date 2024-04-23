/* eslint-disable react/prop-types */

export function ListOfLocations({ locations }) {
    console.log("ListOfLocation", locations);
    return (
        <ul className="cont_location">
            {locations.map(location => (
                <li key={location.id} className="location">
                    <h2>{location.city}</h2>
                    <p>{location.country}</p>
                    <p>{location.name}</p>
                    <p>{location.cord}</p>
                    <p>{location.weather}</p>
                    <p>{location.wind}</p>
                </li>
            ))}
        </ul>
    );
}



export function GeographicLocation({ locations }) {
    const hasLocations = locations?.length > 0;
    return (
        hasLocations ? (<ListOfLocations locations={locations}></ListOfLocations>)
            : (
                <p>No locations found</p>
            )
    );
}


