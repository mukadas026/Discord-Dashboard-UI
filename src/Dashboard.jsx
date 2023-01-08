import React from "react"
import Navbar from "./Navbar"

import logo from "./Assets/discord.png"

const Dashboard = () => {
	return (
		<div className='w-auto grow h-full bg-gray-600 text-white'>
			<Navbar />
			<div className='flex w-full h-full'>
				<div className='flex flex-col align-center justify-center basis-3/5 border-r border-gray-900'>
					<div className="w-max h-max mx-auto">
						<img
							src={logo}
							alt=''
							className='w-96 aspect-auto'
						/>
						<p className='text-gray-500 text-md text-center mt-4'>No one's around to play with Wumpus</p>
					</div>
				</div>
				<div className='basis-2/5'>
					<h2 className='text-xl font-extrabold text-white ml-3 mt-5'>Active Now</h2>
					<div className='text-center w-11/12 mx-auto my-4'>
						<h4 className='text-white text-lg font-bold'>It's quiet for now...</h4>
						<p className='text-gray-500 text-sm'>
							When a friend starts an activity - like playing a game or hanging out on voice chat - we'll
							show it here!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
