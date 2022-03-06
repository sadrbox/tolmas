import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/" exact component={<Home />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
