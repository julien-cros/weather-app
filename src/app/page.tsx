import React from 'react'
import SearchCity from '@/components/SearchCity'
import CityAPIResponse from '@/schemas/Cities'

const fetchCities = async () => {
	const response = await (await fetch("https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json")).json()

	return CityAPIResponse.parse(response)
}

type PageProps = React.PropsWithChildren<{}>

const Page = async ({}: PageProps) => {
  const cities = await fetchCities()

  if (!cities) {
    return (
      <p>error - no cities</p>
    )
  }

  return <SearchCity cities={cities}/>
}

export default Page