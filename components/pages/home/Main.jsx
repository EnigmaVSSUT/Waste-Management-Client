import { Button, Stack, Typography } from "@mui/material";
// import Image from "../../../public/images/landing.jpg";
// import Image from "./images/landing.jpg";
import Image from "next/image";
import Link from "next/link";
// import styles from "../../../styles/globals.css";
// import Images from '../public/images';

const Main = () => {
	return (
		<div className="xyz">
			<div style={{
				backgroundImage: `url("/images/landing_adobe_express.svg")`,
				height: '100vh',
				// width: '100vh',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',

				backgroundSize: 'cover',
			}} />

			<div className="textu" style={{
				position: "absolute",
				// right: "50%",
				left: "50%",
				margin:"auto",
				top: "20%",
				// width:"16em",
				fontFamily: 'Poppins',
			}}>
				<div className="subt" style={{display:"grid",gridTemplateColumns:"1fr 1fr", height:"9rem", width:"18rem"}}>
					<div className="subt1" style={{fontSize:"8em", fontWeight:"700"}}>
						RE
					</div>
					<div className="subt2" style={{fontSize:"1.9em", fontWeight:"800", marginTop:"0.7em"}}>
						<p>DUCE</p>
						<p>USE</p>
						<p>CYCLE</p>
					</div>
				</div>
				<div className="subtt" style={{display:"grid", fontSize:"1.9em", fontWeight:"900"}}>
					CREATE A BETTER FUTURE
				</div>
			</div>
			{/* <div className="mapi">
			  <Image src="../../../public/images/Rectangle 4.png"  alt="error" />
			</div>
	 */}
		</div>
	)
}

export default Main;
