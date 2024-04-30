import { weatherIcons } from "../services/weatherIcons";

export function useWeatherIcons() {
    const getWeatherIconUrl = (weather) => {
        console.log("weather",weather);
        const icon = weatherIcons[weather];
        return icon; // Devuelve la URL del icono de clima
    };
    
    return { getWeatherIconUrl };
}