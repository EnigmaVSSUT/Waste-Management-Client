import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { useLayout } from "../../../lib/context/LayoutContext";

const DefaultAppBar = () => {
	const { toggleSidebar } = useLayout()

	return (
		<AppBar
			position='sticky'
		>
			<Toolbar>
				<Stack
					direction='row'
					alignItems='center'
					gap='16px'
				>
					<IconButton
						onClick={toggleSidebar}
					>
						<Menu />
					</IconButton>
					<Typography>
						Waste Management
					</Typography>
				</Stack>
			</Toolbar>
		</AppBar>
	);
}

export default DefaultAppBar;
