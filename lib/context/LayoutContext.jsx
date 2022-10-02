import { createContext, useContext, useState } from "react"

const LayoutContext = createContext()

const useLayout = () => useContext(LayoutContext)

const LayoutProvider = ({children}) => {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		console.log('sidebar toggle')
		setSidebarOpen(!sidebarOpen)
	}

	return (
		<LayoutContext.Provider
			value={{
				toggleSidebar,
				sidebarOpen
			}}
		>
			{children}
		</LayoutContext.Provider>
	)
}

export {
	LayoutProvider,
	useLayout
}
