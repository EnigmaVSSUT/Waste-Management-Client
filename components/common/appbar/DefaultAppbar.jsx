import { CenterFocusStrong, JoinRightSharp, Menu } from "@mui/icons-material";
import { AppBar, Divider, Button, Stack, Toolbar, Typography, Box, TextField, TabIndicatorProps, Tabs, Tab, Buttons , FormControl} from "@mui/material";
import Image from "next/image";
import { useLayout } from "../../../lib/context/LayoutContext";
// import navres from "./nav";





const DefaultAppBar = () => {
	const { toggleSidebar } = useLayout()
 
	return ( 
		
		<AppBar 
			position='sticky'
			color="surface"
		// sx={{
		// 	borderBottom: '1px solid',
		// 	borderColor: 'neutral.50'
		// }}
		>
			<Toolbar
				sx={{
					padding: '7px 30px',
					backgroundColor: 'transparent',
					background:'transparent',
					// background-color:transparent;
					borderColor:'transparent',
					// margin-bottom:0px;
				  
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
						alt=""
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
						{/* <Typography
							variant='headline.small'
							display={{
								xs: 'none',
								md: 'block'
							}}
						>
							Veer Surendra Sai University of Technology
						</Typography> */}

						<Typography
							variant='headline.small'
							display={{
								xs: 'block',
								md: 'none'
							}}
						>
							VSSUT
						</Typography>

					
					</Stack>

					{/* new */}
					
					<Tabs
						sx={{ marginLeft: "auto" , maxWidth: "auto" }}
						indicatorColor="secondary"
						textColor="black"
					    
					 >
						{/* <Buttons textColor="black"
						> */}

						<Tab sx={{

							textColor: "#D97D54"}}
							 label="Home" />
						<Tab label="View Complain" />
						
						<Button sx={{ marginLeft: "auto",
					                   textColor:"black",  }} variant="outlined" >
							Admin Login
						</Button>
						<Button sx={{ marginLeft: "10px" }} variant="contained">
							Register Complain
						</Button>
						{/* </Buttons> */}
					</Tabs>


					

				</Stack>

				{/* new end  */}
				{/* </Stack> */}
			</Toolbar>
		</AppBar>
		
	);
}

export default DefaultAppBar;
