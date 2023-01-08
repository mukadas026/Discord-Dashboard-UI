import React from "react"
import Items from "./Items"
import { FaFire, FaPoo } from "react-icons/fa"
import { BsPlusLg, BsLightningFill, BsGearFill } from "react-icons/bs"
import {BiDownload} from 'react-icons/bi'

import logo from "./Assets/discord.png"

const Sidebar = () => {
	return (
		<div className='w-16'>
			<div className='flex flex-col item-center fixed top-0 left-0 h-screen w-16 bg-gray-900 text-white shadow-lg z-10'>
				<Items icon={<img src={logo} alt="" className="w-10 aspect-auto mx-auto"/>} tooltip='Direct Messages'/>
				<div className="w-3/5 border-b border-gray-800 mx-auto"></div>
				<Items icon={<FaFire size='28' />} tooltip='FireShip IO'/>
				<Items icon={<BsPlusLg size='28' />} tooltip='Add Server'/>
				<Items icon={<BsLightningFill size='28' />} tooltip='Speed-Up'/>
				<Items icon={<FaPoo size='28' />} tooltip='S***'/>
				<Items icon={<BsGearFill size='28' />} tooltip='Settings'/>
				<div className="w-3/5 border-b border-gray-800 mx-auto"></div>
				<Items icon={<BiDownload size='28' />} tooltip='Download Apps'/>
			</div>
		</div>
	)
}

export default Sidebar
