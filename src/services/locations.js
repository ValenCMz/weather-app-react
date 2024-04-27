const API_KEY = '2aff79fc4f1e4a85b9986c5bc0b7ef0d';


export const searchLocationsForCityAndCountry = async ({search}) => {
    try{
        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${search.city}&key=${API_KEY}`)
        const json = await response.json()

        const city = {
            city: json.city_name,
            country: json.country_code,
            state_code: json.state_code
        }

        const mappedList = json.data.map(location => (
            {
                datetime: location.datetime,
                temp: location.temp,
                weather: location.weather,
                wind: location.wind_spd,
            }
        ))

        const data = {
            city,
            mappedList
        }

        console.log("data", data)

        return {data}

    } catch (error) {
        console.error(error)
    }
}

