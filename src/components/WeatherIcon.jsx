import { useWeatherIcons } from "../hooks/useWeatherIcons";

// eslint-disable-next-line react/prop-types
export function WeatherIcon({icon}){
    const { getWeatherIconUrl } = useWeatherIcons();
    const iconUrl = getWeatherIconUrl(icon);
    return(
        <img src={iconUrl} alt="weather icon" />
    )
}