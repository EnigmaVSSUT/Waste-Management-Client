import { Menu } from "@mui/icons-material";
import { AppBar, Divider, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useLayout } from "../../../lib/context/LayoutContext";

const DefaultAppBar = () => {
	const { toggleSidebar } = useLayout()

	return (
		<AppBar
			position='sticky'
			color="surface"
			sx={{
				borderBottom: '1px solid',
				borderColor: 'neutral.50'
			}}
		>
			<Toolbar
				sx={{
					padding: '24px 32px',
					// backgroundColor: '#ffffff'
				}}
			>
				<Stack
					flexGrow={1}
					gap='16px'
					direction='row'
					alignItems='center'
				>
					<Image 
						src='/images/vssut_logo.png'
						width={65}
						height={65}
					/>
					<Divider 
						flexItem
						sx={{
							borderWidth: 0,
							borderColor: '#73796E',
							borderLeftWidth: '1px'
						}}
					/>
					<Stack>
						<Typography
							variant='headline.small'
						>
							Veer Surendra Sai University of Technology
						</Typography>
						<Typography
							variant='title.small'
						>
							Waste Management System
						</Typography>
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	);
}

export default DefaultAppBar;
