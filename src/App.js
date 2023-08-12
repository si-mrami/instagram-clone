import Feed from "./components/Feed/Feed";
import LeftBar from "./components/LeftBar/LeftBar";
import SIdeBar from "./components/SideBar/SIdeBar";
import './App.scss';

function App() {
	return (
		<div className="app">
			<LeftBar/>
			<Feed/>
			<SIdeBar/>
		</div>
	);
}

export default App;
