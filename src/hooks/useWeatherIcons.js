import { weatherIcons } from "../services/weatherIcons";

export function useWeatherIcons () {
    
    const getWeatherIcon = (weather) => {
        console.log(weather)
        const icon = weatherIcons[weather];
        console.log(icon)
        return icon;
    }
    return {getWeatherIcon}
}