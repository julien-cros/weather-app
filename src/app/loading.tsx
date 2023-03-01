import Spinner from '@/components/Spinner'
import React from 'react'

type LoadingProps = React.PropsWithChildren<{}>

const Loading = ({}: LoadingProps) => {
	return <Spinner />
}

export default Loading