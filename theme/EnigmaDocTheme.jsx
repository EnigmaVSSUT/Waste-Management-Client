import { ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";
import { getTheme } from ".";

const EnigmaDocThemeContext = createContext()

const EnigmaDocTheme = ({children}) => {
	const [themeMode, setThemeMode] = useState('light')

	const toggleTheme = () => setThemeMode( themeMode === 'light' ? 'dark' : 'light')

	return (
		<EnigmaDocThemeContext.Provider
			value={{
				toggleTheme
			}}
		>
			<ThemeProvider
				theme={ getTheme(themeMode) }
			>
				{children}
			</ThemeProvider>
		</EnigmaDocThemeContext.Provider>
	);
}

export default EnigmaDocTheme;
