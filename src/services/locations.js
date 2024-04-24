const API_KEY = '8cfc2c604cc4b3cdcc700071ee066334';

export const searchLocationsForCityAndCountry = async ({search}) => {
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search.city}&appid=${API_KEY}`)
        const json = await response.json()
        // const lista = data.list

        // Necesito los primeros 5 elementos de la list
        const mappedList = json.list.slice(0, 5).map(location => ({
            main: location.main,
            weather: location.weather,
            clouds: location.clouds,
            wind: location.wind,
            rain: location.rain
        }))

        //a mappedList, le quiero agregar un objeto
        const data = {
            mappedList,
            city: {
                id: json.city.id,
                country: json.city.country,
                name: json.city.name,
                cord: json.city.coord
            }
        }

        return {data}

    } catch (error) {
        console.error(error)
    }
}

