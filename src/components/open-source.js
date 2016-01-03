import SectionHeader from "./section-header";
import SectionInfo from "./section-info";
import OpenSourceItem from "./open-source-item";
import xhr from "xhr";

class OpenSource extends React.Component {
	constructor() {
		super();
		this.state = {
			openSourceItems: []
		};
	}

	componentDidMount() {
		xhr({uri: "/data/os.json"}, (err, res, body) => {
			if(!err) {
				this.setState({
					openSourceItems: JSON.parse(body)
				});
			}
		});
	}

	render() {
		const { styles } = this.props;
		const openSourceItems = this.state.openSourceItems.map(({name, image, url}) => {
			return <OpenSourceItem key={name} image={image} url={url}> {name}</OpenSourceItem>;
		});
		return (
			<div style={styles.section}>
				<SectionHeader>Open Source</SectionHeader>
				<SectionInfo>
					We make an effort to contribute back to the tools we use, and work to contribute tools
					we find useful interally back to the community at large. Below you can find links to some
					of our active open source projects.
				</SectionInfo>
				<div style={styles.gridContainer}>
					{openSourceItems}
				</div>
			</div>
		);
	}
}

OpenSource.propTypes = {
	styles: React.PropTypes.shape({
		section: React.PropTypes.object.isRequired,
		gridContainer: React.PropTypes.object.isRequired
	}).isRequired
};

OpenSource.defaultProps = {
	styles: {
		section: {
			display: "flex",
			flexDirection: "column",
			padding: 10
		},
		gridContainer: {
			display: "flex",
			flexWrap: "wrap",
			alignItems: "center",
			justifyContent: "center",
			padding: 5
		}
	}
};

export default OpenSource;