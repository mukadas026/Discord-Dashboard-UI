import React from "react"

import img from "./winter.jpg"

import "./index.css"

const App = () => {
	return (
		<div>
			<h1 className='text-3xl font-bold line-through bg-red-600 rounded w-sm font-mono'>Hello world!</h1>
			<img
				src={img}
				alt=''
				className="aspect-video bg-red-1"
			/>
		</div>
	)
}
export default App
