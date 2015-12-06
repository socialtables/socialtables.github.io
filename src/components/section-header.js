import colors from "../styles";

const SectionHeader = ({style, children}) => <h2 style={style}>{children}</h2>;

SectionHeader.defaultProps = {
	style: {
		fontSize: 24,
		lineHeight: "32px",
		paddingTop: 24,
		paddingLeft: 24,
		color: colors.veryDarkGray
	}
}

export default SectionHeader;
