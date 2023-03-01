'use client'
import { CityAPIResponseType } from '@/schemas/Cities'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type SearchCityProps = React.PropsWithChildren<{
	cities: CityAPIResponseType
}>

const SearchCity = ({ cities }: SearchCityProps) => {
	const [query, setQuery] = useState('');
	const { push } = useRouter()
	const [filteredData, setFilteredData] = useState<CityAPIResponseType>([]);

	useEffect(() => {
		if (query.length < 3 || !cities) return

		setFilteredData(
			cities
				.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
				.filter(({ name }, i, arr) => arr.findIndex(val => val.name === name) === i)
		);
		
	}, [query])

	console.log(filteredData);
	
	
	return (
		<div>
			<div className='flex flex-col'>
				<input className='bg-red-500 border-8 border-green-500' type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search" />
				{filteredData.length !== 0 && filteredData.map(({name}) => (
					<button key={name} onClick={() => push(`/${name}`)}>{name}</button>
				))}
			</div>
		</div>
	)
}


export default SearchCity