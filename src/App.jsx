import Chatbox from "./components/chatbox/Chatbox";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import "./app.css";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Chatbox />
			<Footer />
		</div>
	);
}

export default App;
