import { CityAPIResponseType } from '@/schemas/Cities'
import React from 'react'

type RenderCitiesProps = React.PropsWithChildren<{
	cities: CityAPIResponseType
}>

const RenderCities = ({ cities }: RenderCitiesProps) => {
	return (
		<div>
			{cities.map(({ name, country }, i) => (
				<p key={i}>{name} - {country}</p>
			))}
		</div>
	)
}

export default RenderCities