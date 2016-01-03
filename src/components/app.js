import Header from "./header";
import OpenSource from "./open-source";
import WorkHere from "./work-here";

const App = ({style}) => {
	return (
		<div style={style}>
			<Header>Social Tables Engineering</Header>
			<OpenSource />
			<WorkHere />
		</div>
	);
};

App.defaultProps = {
	style: {
		display: "flex",
		flexDirection: "column"
	}
};

export default App;