import React,{useState} from 'react';
import {Box,Typography,TextField,Button} from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

const Login = () => {
	const [isSignup,setIsSignup] = useState(false);
	const [input,setInput] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name] : e.target.value
		}))
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(input);
	}
	const resetState = () => {
		setIsSignup(!isSignup);
		setInput({name: "", email: "",password: ""})
	}
	console.log(isSignup)
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Box display="flex" 
				flexDirection={"column"} 
				maxWidth={600} 
				alignItems="center" 
				justifyContent={"center"} 
				margin="auto" padding={3} 
				borderRadius={5} 
				boxShadow={'5px 5px 10px #ccc'} 
				sx={{
					":hover":{
						boxShadow: "10px 10px 20px #ccc",
					},
				}}
				>
					<Typography variant="h2" padding={2} textAlign="center">{isSignup ? "SignUp" : "Login"}</Typography>
					{isSignup && (<TextField onChange={handleChange} name="name" value={input.name} margin="normal" type={'text'} variant="outlined" placeholder="Name" />)}
					<TextField onChange={handleChange} name="email" value={input.email} margin="normal" type={'email'}variant="outlined" placeholder="Email" />
					<TextField onChange={handleChange} name="password" value={input.password} margin="normal" type={'password'} variant="outlined" placeholder="Password" />
					<Button 
					endIcon ={isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />}
					sx={{marginTop: 3,borderRadius: 3}} 
					type="submit" 
					variant="contained" 
					color="primary">
						{isSignup ? "SignUp" : "Login"}
					</Button>
					<Button
				     endIcon ={isSignup ? <LoginOutlinedIcon />  : <HowToRegOutlinedIcon />}
					 onClick={resetState} 
					 sx={{marginTop: 3, borderRadius: 3}} 
					 variant="contained" 
					 color="secondary">
						Change To {isSignup ? "Login" : "SignUp"}
					</Button>

				</Box>
			</form>
		</div>
	);
}

export default Login;
