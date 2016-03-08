import { AppBar } from "material-ui";
import colors from "../styles";

const Header = ({children, style}) => {
	return (
		<AppBar 
			style={style}
			title={children}
			titleStyle={ { position: "absolute", right: "10px" } }
			showMenuIconButton={false}
		/>
	);
}
Header.propTypes = {
	style: React.PropTypes.object.isRequired
};

Header.defaultProps = {
	style: {
		backgroundColor: colors.darkGray,
		backgroundImage: "url('https://14563-presscdn-0-34-pagely.netdna-ssl.com/wp-content/themes/socialtables/images/logo-white.svg')",
		backgroundPosition: "10px 50%",
		backgroundRepeat: "no-repeat"
	}
};
export default Header;