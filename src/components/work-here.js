import SectionHeader from "./section-header";
import SectionInfo from "./section-info";
import colors from "../styles";

const WorkHere = ({styles}) => {
	return (
		<div>
			<SectionHeader>Work here</SectionHeader>
			<SectionInfo style={styles.p}>
				We&apos;re always looking to bring on new people who are as excited about technology as we are.
				Take a look at our <a href="https://www.socialtables.com/careers/">job listings</a> and contact
				us if anything looks like a fit!
			</SectionInfo>
		</div>
	);
}

WorkHere.propTypes = {
	styles: React.PropTypes.shape({
		p: React.PropTypes.object.isRequired
	}).isRequired
};

WorkHere.defaultProps = {
	styles: {
		p: {
			padding: 12,
			paddingLeft: 24,
			lineHeight: "24px",
			fontSize: 18,
			color: colors.veryDarkGray
		}
	}
};

export default WorkHere;
