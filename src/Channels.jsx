import React from "react"
import { BsPersonFill, BsPlusLg, BsFillMicMuteFill, BsHeadset, BsGearFill } from "react-icons/bs"
import { SiTurbosquid } from "react-icons/si"
import Channel from "./Channel"
import friendList from "./friendsList"
import Icon from './Icon.jsx'

import img from "./Assets/friend1.png"

const myFriends = friendList.map((friend) => (
	<Channel
		image={
			<img
				src={friend.img}
				alt=''
				className='w-8 h-8 rounded-full'
			/>
		}
		name={friend.name}
	/>
))

const Channels = () => {
	return (
		<div className='w-64 h-full bg-gray-700 relative'>
			<div className='flex justify-center items-center w-full h-14 shadow-sm shadow-black'>
				<input
					type='text'
					placeholder='Find or start a conversation'
					className='block w-10/12 mx-auto h-6 indent-2 bg-gray-900 text-white text-sm rounded border-0 focus:ring-1'
				/>
			</div>
			<div className=''>
				<div>
					<Channel
						name='Friends'
						image={<BsPersonFill size='25' />}
					/>
					<Channel
						name='Nitro'
						image={<SiTurbosquid size='25' />}
					/>
				</div>
				<div className='w-4/5 flex items-center justify-between my-5 mx-auto text-gray-500 group'>
					<h3 className='text-sm group-hover:text-white'>DIRECT MESSAGES</h3>{" "}
					<Icon text='Create DM' icon={<BsPlusLg size='15' />}/>
				</div>
				<div>{myFriends}</div>
				<div className='group/top fixed bottom-0 bg-gray-800 text-white h-14 w-64 flex items-center justify-around'>
					<img
						src={img}
						alt=''
						className='w-8 h-8 rounded'
					/>
					<div>
						<h4 className='font-semibold text-md'>Mukadas</h4>
						<div className='h-5 overflow-hidden text-gray-500 text-sm'>
							<p className='transition-all group-hover/top:translate-y-[-32px] '>hello there</p>
							<p className='transition-all group-hover/top:translate-y-[-25px]'>#890239</p>
						</div>
					</div>
					<Icon icon={<BsFillMicMuteFill size='20' />} text='Mute'/>
					<Icon text='Deafen' icon={<BsHeadset size='20' />}/>
					<Icon text='User Settings' icon={<BsGearFill size='20' />} />
				</div>
			</div>
		</div>
	)
}

export default Channels
