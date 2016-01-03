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
Header.propTypes = {
	style: React.PropTypes.object.isRequired
};

Header.defaultProps = {
	style: {
		backgroundColor: colors.pink
	}
};
export default Header;