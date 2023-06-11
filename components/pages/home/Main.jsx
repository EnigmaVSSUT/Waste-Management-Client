import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
	return (
		<Stack
			padding='64px 32px'
			gap='32px'
			sx={(theme) => ({
				// background: theme.palette.surface[10],
				backgroundImage: 'images/landing_page.png',
			})}
		 >
			<Image
					src='/images/landing_page.png'
					width={700}
					height={349}
					style={{
						width: '100%',
						maxWidth: '700px',
					
					}}
					alt=""
				/>
			{/* <Stack
				gap='32px'
				alignItems='center'
			>
				<Image
					src='/images/cfc-svg.svg'
					width={700}
					height={349}
					style={{
						width: '100%',
						maxWidth: '700px',
					
					}}
					alt=""
				/>
				<Stack
					gap='8px'
				>
					<Typography
						variant='display.small'
						textAlign='center'
					>
						A mission to
					</Typography>
					<Typography
						variant='display.large'
						textAlign='center'
					>
						Keep VSSUT Clean
					</Typography>
				</Stack>
				<Stack
					direction='row'
					justifyContent='center'
					padding='10px'
					gap='10px'
				>
					<Link
						href='/report-filled'
					>
						<Button
							variant='contained'
						>
							<Typography
								variant='label.large'
							>
								Report filled dustbin
							</Typography>
						</Button>
					</Link>
					<Link
						href='/new-dustbin'
					>
						<Button
							variant='outlined'
						>
							<Typography
								variant='label.large'
							>
								Request a dustbin
							</Typography>
						</Button>
					</Link>
				</Stack>
			</Stack> */}
		</Stack>
	);
}

export default Main;
