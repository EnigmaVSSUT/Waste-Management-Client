const components = {
	MuiInput: {
		defaultProps: {
			disableUnderline: true,
		}
	},
	MuiAppBar: {
		defaultProps: {
			elevation: 0
		}
	},
	MuiButton: {
		defaultProps: {
			disableElevation: true
		},
		styleOverrides: {
			root: {
				padding: '10px 24px',
				borderRadius: '100px',
				textTransform: 'none'
			}
		}
	}
}

export default components
