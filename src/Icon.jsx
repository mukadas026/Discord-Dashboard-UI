import React from "react"

const Icon = ({icon, text}) => {
	return (
		<span className='relative hover:text-white hover:cursor-pointer group/child hover:bg-gray-600 rounded-lg p-1 border-box'>
			<span className='absolute text-white bg-gray-900 py-2 px-4 rounded w-max text-center text-xs scale-0 transition-all bottom-[200%] left-[-20px] shadow-sm shadow-black group-hover/child:scale-100 '>
				{text}
				<span className='absolute w-3 h-3 bg-gray-900 bottom-[-.3rem] left-1/4 rotate-45'></span>
			</span>
			{icon}
		</span>
	)
}

export default Icon
