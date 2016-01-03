import { Paper } from "material-ui";
import colors from "../styles";

class OpenSourceItem extends React.Component {
	constructor() {
		super();
		this.state = {
			zDepth: 0
		}
	}
	render() {
		const { children, image, url, styles } = this.props;
		return (
			<Paper 
				zDepth={this.state.zDepth} 
				style={styles.container} 
				onMouseEnter={() => this.setState({zDepth: 4})}
				onMouseLeave={() => this.setState({zDepth: 0})}
			>
				<a href={url} target="_blank" style={{textDecoration: "none"}}>
					<h3 style={styles.header}>{children}</h3>
					<img src={image} style={styles.image} />
				</a>
			</Paper>
		);
	}
}

OpenSourceItem.propTypes = {
	styles: React.PropTypes.shape({
		container: React.PropTypes.object.isRequired,
		header: React.PropTypes.object.isRequired,
		image: React.PropTypes.object.isRequired
	}).isRequired
};

OpenSourceItem.defaultProps = {
	styles: {
		container: {
			width: "31%",
			height: 300,
			margin: 10,
			marginBottom: "10%"
		},
		header: {
			color: colors.veryDarkGray,
			backgroundColor: colors.medLightGray,
			fontSize: "16px",
			lineHeight: "64px",
			textAlign: "center"
		},
		image: {
			width: "100%"
		}
	}
};

export default OpenSourceItem;