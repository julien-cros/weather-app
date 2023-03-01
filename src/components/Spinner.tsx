import React from 'react'

type SpinnerProps = React.PropsWithChildren<{
	className?: string
}>

const Spinner = ({ className }: SpinnerProps) => {
	return (
		<div className={className}>
      <div className="h-5 w-5 border-4 rounded-full border-t-neutral-500 border-neutral-200 animate-spin"></div>
    </div>
	)
}

export default Spinner