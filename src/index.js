import { render } from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./components/app";

injectTapEventPlugin();

render(<App />, document.getElementById("app"));