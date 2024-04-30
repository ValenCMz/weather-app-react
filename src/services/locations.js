const API_KEY = '2aff79fc4f1e4a85b9986c5bc0b7ef0d';
// adfe1428799249c69f5bf7c45f234d75
// 2aff79fc4f1e4a85b9986c5bc0b7ef0d

export const searchLocationsForCity = async ({search}) => {
    try{
        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${search.city}&days=16&key=${API_KEY}`)
        const json = await response.json()

        // Me quiero quedar solo con los son a partir de mañana, osea despues de hoy

        const currentDate = new Date().toISOString().split("T")[0]

        const city = {
            city: json.city_name,
            country: json.country_code,
            state_code: json.state_code
        }

        const mappedList = json.data.filter(location => location.datetime > currentDate).map(location => (
            {
                datetime: location.datetime,
                temp: location.temp,
                temp_max: location.max_temp,
                temp_min: location.min_temp,
                weather: location.weather,
                wind: location.wind_spd,
            }
        ))

        const data = {
            city,
            mappedList
        }

        return {data}

    } catch (error) {
        console.error(error)
    }
}

export const searchLocationsCurrent = async ({search}) => {
    try{
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${search.city}&key=${API_KEY}`)
        const json = await response.json()
        
        const current = json.data.map(current => ({
            city: current.city_name,
            country: current.country_code,
            state_code: current.state_code,
            datetime: current.datetime,
            weather: current.weather,
            temp: current.temp,
            wind: current.wind_spd,
        
        }))

        return current

    }
    catch(error){
        console.error(error)
    }
}