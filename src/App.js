import Root from "./routes/Root";
import "./App.css";
import axios from "axios";
axios.defaults.withCredentials = true;
function App() {
  return <Root />;
}

export default App;
