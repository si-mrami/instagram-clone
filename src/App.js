import Feed from "./components/Feed/Feed";
import LeftBar from "./components/LeftBar/LeftBar";
import SIdeBar from "./components/SideBar/SIdeBar";
import './App.scss';

function App() {
	return (
		<div className="app">
			<div className="left">
				<LeftBar />
			</div>
			<Feed />
			<SIdeBar />
		</div>
	);
}

export default App;
