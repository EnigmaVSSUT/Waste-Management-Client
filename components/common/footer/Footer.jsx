import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import footerLinks from "../../../lib/data/footer-links";

const FooterLink = ({ item }) => (
	<Stack
		gap='10px'
	>
		<Typography
			variant='title.large'
			color='primary.95'
		>
			{item.category}
		</Typography>
		<Stack
			gap='8px'
			padding='10px 0'
		>
			{ item.links.map(link => (
				<Link
					href={link.href}
					target={link.target}
				>
					<Typography
						variant='body.large'
						color='primary.99'
					>
						{link.text}
					</Typography>
				</Link>
			)) }
		</Stack>
	</Stack>
)

const FooterBranding = () => (
	<Stack
		gap='16px'
		direction={{
			xs: 'column',
			md: 'row'
		}}
		alignItems='center'
	>
		<Image 
			src='/images/vssut_logo.png'
			width={108}
			height={108}
		/>
		<Stack
			gap='8px'
			alignItems={{
				xs: 'center',
				md: 'start'
			}}
		>
			<Typography
				variant='title.medium'
				color='primary.99'
				textAlign={{
					xs: 'center',
					md: 'left'
				}}
			>
				Veer Surendra Sai University of Technology
			</Typography>
			<Typography
				variant='title.medium'
				color='primary.99'
				textAlign={{
					xs: 'center',
					md: 'left'
				}}
			>
				Waste Management System
			</Typography>
		</Stack>
	</Stack>
)

const LinkContainer = () => (
	<Stack
		gap='48px'
		direction='row'
	>
		{ footerLinks.map(item => <FooterLink item={item} key={item.category} />) }
	</Stack>
)

const Content = () => (
	<Stack
		maxWidth='973px'
		width='100%'
		gap='120px'
		direction={{
			xs: 'column',
			md: 'row'
		}}
		alignItems='center'
	>
		<FooterBranding />
		<LinkContainer />
	</Stack>
)

const Footer = () => {
	return (
		<Stack
			padding='64px 32px 32px'
			gap='24px'
			alignItems='center'
			bgcolor='primary.10'
		>
			<Content />
		</Stack>
	);
}

export default Footer;
