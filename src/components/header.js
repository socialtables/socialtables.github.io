import { AppBar } from "material-ui";
import colors from "../styles";

const HeaderIcon = () => {
	return (
		<a href="https://www.socialtables.com/" alt="www.socialtables.com">
			<img src="https://14563-presscdn-0-34-pagely.netdna-ssl.com/wp-content/themes/socialtables/images/logo-white.svg" />
		</a>
	);
};

const Header = ({children, style}) => {
	return (
		<AppBar
			style={style}
			title={children}
			titleStyle={ { position: "absolute", left: "10px" } }
			iconElementRight={<HeaderIcon />}
			iconStyleRight={ { "margin-top": "10px", "margin-right": "-10px" } }
			showMenuIconButton={false}
		/>
	);
}
Header.propTypes = {
	style: React.PropTypes.object.isRequired
};

Header.defaultProps = {
	style: {
		backgroundColor: colors.darkGray
	}
};
export default Header;