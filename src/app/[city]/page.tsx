import WeatherAPIResponse from '@/schemas/Weather'
import React from 'react'
import Clouds from '@/assets/Clouds'
import Rain from '@/assets/Rain'
import Sun from '@/assets/Sun'

type PageProps = React.PropsWithChildren<{
	params: {
		city: string
	}
}>

const fetchWeather = async (city: string) => {
	const response = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`)).json()

	return WeatherAPIResponse.parse(response)
}

const icons = {
	"Thunderstorm": <Clouds width={100}/>,
	"Drizzle": <Clouds width={100}/>,
	"Rain": <Rain width={100}/>,
	"Snow": <Clouds width={100}/>,
	"Clear": <Sun width={100}/>,
	"Clouds": <Clouds width={100}/>,
}

const Page = async ({ params: { city } }: PageProps) => {
	const weather = await fetchWeather(city)

	return (
		<div className="w-full h-screen flex p-6 space-x-6 bg-neutral-200">
			<div className='grow h-full flex flex-col space-y-6'>
				<div className='h-16 w-full bg-slate-300 rounded-xl' >
					{/* <input className=''>Search...</input> */}
				</div>
				<div className='grow w-full bg-neutral-200 rounded-xl' >
					<p className='text-neutral-500'>{city}</p>
					<p className='text-5xl'>{JSON.stringify(weather?.main?.temp)} °C</p>
					{/* <p className='m-10'>{icons[weather?.weather?.length >]}</p> */}
					<div className='flex flex-row justify-center text-center text-3xl'>
						<div className=' bg-slate-300 rounded-lg flex flex-col p-10'>min<p className='m-4'>{JSON.stringify(weather?.main?.temp_min)} °C</p></div>
						<div className='flex flex-col p-10'>max<p className='m-4'>{JSON.stringify(weather?.main?.temp_max)} °C</p></div>
						<div className='flex flex-col p-10'>wind<p className='m-4'>{JSON.stringify(weather?.wind?.speed)} kmh</p></div>
						<div className='flex flex-col p-10'>north<p className='m-4'>{JSON.stringify(weather?.wind?.deg)} °</p></div>
					</div>
				</div>
				<div className='h-64 w-full bg-slate-300 rounded-xl' ></div>
			</div>
			<div className='w-96 h-full bg-slate-300 rounded-xl' >
			
			</div>
		</div>
	)
}

export default Page