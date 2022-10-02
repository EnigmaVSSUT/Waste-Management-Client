import { LayoutProvider } from "../../../lib/context/LayoutContext";
import DefaultLayout from "./DefaultLayout";

const Layout = ({children}) => {
	return (
		<LayoutProvider>
			<DefaultLayout>
				{children}
			</DefaultLayout>
		</LayoutProvider>
	);
}

export default Layout;
