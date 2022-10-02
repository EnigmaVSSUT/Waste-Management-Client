import { Drawer, Stack, Typography } from "@mui/material"
import { useEffect } from "react"
import { SIDEBAR_WIDTH } from "../../../lib/constant"
import { useLayout } from "../../../lib/context/LayoutContext"

const DefaultSideBar = () => {
	const { sidebarOpen, toggleSidebar } = useLayout()

	useEffect(() => {
		console.log(sidebarOpen)
	}, [sidebarOpen])

	return (
		<Drawer
			variant='temporary'
			sx={{
				width: SIDEBAR_WIDTH,
				'& .MuiPaper-root': {
					width: SIDEBAR_WIDTH
				}	
			}}
			open={sidebarOpen}
			onClose={toggleSidebar}
		>
			<Stack>
				<Typography>
					This app aims to minimize the use of plastic in and around VSSUT.
				</Typography>
			</Stack>
		</Drawer>
	)
}

export default DefaultSideBar

