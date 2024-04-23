const API_KEY = '8cfc2c604cc4b3cdcc700071ee066334';

export const searchLocationsForCityAndCountry = async ({search}) => {
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search.city},${search.country}&appid=${API_KEY}`)
        const data = await response.json()
        // const lista = data.list

        return {
            id: data.city.id,
            country: data.city.country,
            name: data.city.name,
            cord: data.city.coord
        }


        // const mappedList = lista.map(location => ({
        //     weather: location.weather,
        //     wind: location.wind,            
        // }));

        // const cityInfo = {
        //     id: data.city.id,
        //     country: data.city.country,
        //     name: data.city.name,
        //     cord: data.city.coord
        // };

        // return {
        //     lista: mappedList,
        //     city: cityInfo
        // };
    } catch (error) {
        console.error(error)
    }
}

