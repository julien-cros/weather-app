import * as z from 'zod'

const WeatherAPIResponse = z.object({
	coord: z.object({
		lon: z.number(),
		lat: z.number(),
	}),
	weather: z.array(z.object({
		id: z.number(),
		main: z.enum(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Clear', 'Clouds']),
		description: z.string(),
		icon: z.string(),
	})), 
	base: z.string(),
	main : z.object({
		temp: z.number(),
		feels_like: z.number(),
		temp_min: z.number(),
		temp_max: z.number(),
		pressure: z.number(),
		humidity: z.number(),
	}),
	visibility: z.number(),
	wind: z.object( 
	{
		speed: z.number(),
		deg: z.number(),
	}),
	clouds: z.object({
		all: z.number(),
	}),
	dt: z.number(),
	sys: z.object({
		type: z.number(),
		id: z.number(),
		country: z.string(),
		sunrise: z.number(),
		sunset: z.number(),
	}),
	timezone: z.number(),
	id: z.number(),
	name: z.string(),
	cod: z.any(),
}).deepPartial()

export type WeatherAPIResponseType = z.infer<typeof WeatherAPIResponse>

export default WeatherAPIResponse