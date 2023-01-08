import React from "react"
import DiscordSidebar from './DiscordSidebar'
import Channels from './Channels'
import Dashboard from './Dashboard'
import Sidebar from "./Sidebar"

import "./index.css"

const App = () => {
	return (
		<div className="flex w-screen h-screen overflow-hidden">
			<Sidebar />
			<Channels />
			<Dashboard />
		</div>
	)
}
export default App
