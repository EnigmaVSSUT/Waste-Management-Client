import { createTheme } from "@mui/material";
import { lightThemeOptions } from "./options";

const getTheme = (themeMode) => {
	const theme = createTheme(lightThemeOptions)
	return theme
}

export {
	getTheme
}
