import React, { useState } from "react";
import Nav from "./Nav";
import Hoglist from "./Hoglist";

import hogs from "../porkers_data";

function App() {
	// console.log("HOGS:", hogs);
	const [isGreased, setGreased] = useState(false)

	function handleSortGreasedBtnClick() {
		setGreased(!isGreased)
	}

	return (
		<div className="App">
			<Nav />
			<button onClick={handleSortGreasedBtnClick}>{isGreased ? "All hogs" : "Greased"}</button>
			<Hoglist hogs={hogs} isGreased={isGreased}/>
		</div>
	);
}

export default App;
