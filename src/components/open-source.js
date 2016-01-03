import SectionHeader from "./section-header";
import SectionInfo from "./section-info";
import OpenSourceItem from "./open-source-item";
const OpenSource = ({styles}) => {
	return (
		<div>
			<SectionHeader>Open Source</SectionHeader>
			<SectionInfo>
				We make an effort to contribute back to the tools we use, and work to contribute tools
				we find useful interally back to the community at large. Below you can find links to some
				of our active open source projects.
			</SectionInfo>
			<div style={styles.gridContainer}>
				<OpenSourceItem 
					key="react-user-tour"
					image="./assets/react-user-tour.png" 
					url="https://github.com/socialtables/react-user-tour"
				> 
					React User Tour
				</OpenSourceItem>
				<OpenSourceItem 
					key="react-infinity-menu"
					image="./assets/react-infinity-menu.png" 
					url="https://github.com/socialtables/react-infinity-menu"
				> 
					React Infinity Menu
				</OpenSourceItem>
				<OpenSourceItem 
					key="obj-2-json"
					image="./assets/obj-2-json.png" 
					url="https://github.com/socialtables/obj2json"
				> 
					obj2json
				</OpenSourceItem>
				<OpenSourceItem 
					key="socketio-store"
					image="./assets/socketio-store.png" 
					url="https://github.com/socialtables/socket.io-store"
				> 
					socket.io store
				</OpenSourceItem>
				<OpenSourceItem 
					key="react-image-fallback"
					image="./assets/react-image-fallback.png" 
					url="https://github.com/socialtables/react-image-fallback"
				> 
					React Image Fallback
				</OpenSourceItem>
				<OpenSourceItem 
					key="redux-unhandled-action"
					image="./assets/redux-unhandled-action.png" 
					url="https://github.com/socialtables/redux-unhandled-action"
				> 
					Redux Unhandled Action
				</OpenSourceItem>
			</div>
		</div>
	);
}

OpenSource.propTypes = {
	styles: React.PropTypes.shape({
		gridContainer: React.PropTypes.object.isRequired
	}).isRequired
};

OpenSource.defaultProps = {
	styles: {
		gridContainer: {
			display: "flex",
			flexWrap: "wrap",
			alignItems: "center",
			justifyContent: "center"
		}
	}
};

export default OpenSource;