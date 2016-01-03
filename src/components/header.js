import { AppBar } from "material-ui";
import colors from "../styles";

const Header = ({children, style}) => {
	return (
		<AppBar 
			style={style}
			title={children}
			showMenuIconButton={false}
		/>
	);
}

Header.defaultProps = {
	style: {
		backgroundColor: colors.pink
	}
};
export default Header;