import * as z from 'zod'

const CityAPIResponse = z.array(z.object({
	country: z.string(),
	name: z.string(),
	lat: z.string(),
	lng: z.string(),
}))

export type CityAPIResponseType = z.infer<typeof CityAPIResponse>

export default CityAPIResponse