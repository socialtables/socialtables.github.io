import colors from "../styles";

const SectionInfo = ({style, children}) => <p style={style}>{children}</p>;

SectionInfo.propTypes = {
	style: React.PropTypes.object.isRequired
};

SectionInfo.defaultProps = {
	style: {
		padding: 24,
		lineHeight: "24px",
		color: colors.veryDarkGray
	}
}

export default SectionInfo;
