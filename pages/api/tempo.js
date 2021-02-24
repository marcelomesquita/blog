async function tempo(request, response) {
	const now = new Date();
	const dynamicDate = now.toISOString();
	const weatherSecret = process.env.WEATHER_SECRET;
	const currentWeatherRoute = `https://api.openweathermap.org/data/2.5/weather?q=Brasilia,DF,Brasil&appid=${weatherSecret}`;

	const currentWeatherResponse = await fetch(currentWeatherRoute);
	const currentWeatherResponseJson = await currentWeatherResponse.json();

	response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

	response.json({
		dynamicDate,
		weather: currentWeatherResponseJson
	})
}

export default tempo;
