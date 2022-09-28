import Layout from '../components/common/layout/Layout'
import '../styles/globals.css'
import EnigmaDocTheme from '../theme/EnigmaDocTheme'

function MyApp({ Component, pageProps }) {
  return (
	<EnigmaDocTheme>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</EnigmaDocTheme>
  )
}

export default MyApp
