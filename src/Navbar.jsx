import React from "react";
import { BsPersonFill, BsFillChatDotsFill, BsInboxFill } from "react-icons/bs"
import { MdOutlineHelp } from "react-icons/md"

const Navbar = () => {
  return <div className='h-14 flex justify-between items-center shadow-sm shadow-black text-gray-500'>
				<div className='flex items-center w-1/2 justify-around'>
					<div className='ml-2 border-r border-gray-500 pr-2 flex items-center justify-between space-x-2'>
						<BsPersonFill size={25} /> <span>Friends</span>
					</div>
					<div className='nav-item'>Online</div>
					<div className='nav-item'>All</div>
					<div className='nav-item'>Pending</div>
					<div className='nav-item'>Blocked</div>
					<div className='nav-item'>Add Friend</div>
				</div>
				<div className='flex items-center w-1/6 justify-around'>
					<div className='relative group border-r border-gray-500 pr-2'>
						<BsFillChatDotsFill
							size={25}
							className=''
						/>
						<span className='hover-icon group-hover:scale-100'>
							New Group DM
						</span>
					</div>
					<div className='relative group '>
						<BsInboxFill size={25} />
						<span className='hover-icon group-hover:scale-100'>
							Inbox
						</span>
					</div>
					<div className='relative group '>
						<MdOutlineHelp size={25} />
						<span className='hover-icon group-hover:scale-100'>
							Help
						</span>
					</div>
				</div>
			</div>
};

export default Navbar;
