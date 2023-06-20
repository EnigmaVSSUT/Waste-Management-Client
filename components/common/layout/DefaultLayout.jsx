import { Box, Stack, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { LayoutProvider } from "../../../lib/context/LayoutContext";
import DefaultAppBar from "../appbar/DefaultAppbar";
import Footer from "../footer/Footer";
import DefaultSideBar from "../sidebar/DefaultSideBar";


const Offset = styled('div')(({theme}) => theme.mixins.toolbar)

const DefaultLayout = ({children}) => { 
	
	return (
		<Stack
			minHeight='100vh'
		>
			<DefaultAppBar />
			{/* <Offset /> */}
			<Box
				component={motion.div}
				sx={{
					flexGrow: 1
				}}
			>
				{children}
			</Box>
			<Footer />
			<DefaultSideBar />
		</Stack>
	);
}

export default DefaultLayout;
