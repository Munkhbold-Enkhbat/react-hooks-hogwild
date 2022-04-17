import React, { useState } from "react";
import Nav from "./Nav";
import Hoglist from "./Hoglist";
import NewHogAdd from "./NewHogAdd";

import hogs from "../porkers_data";

function App() {
	// console.log("HOGS:", hogs);
	const [isGreased, setIsGreased] = useState(false)
	const [isHide, setIsHide] = useState(false)
	const [selectSort, setSelectSort] = useState('all')
	const [myHogs, setMyHogs] = useState(hogs)
	const sortCategories = ['all', 'name', 'weight']

	function handleHideClick() {
		if(isHide) {
			return
		} else {
			return <Hoglist hogs={hogs} isGreased={isGreased} selectSort={selectSort} isHide={isHide}/>					
		}
	}

	return (
		<div className="App">
			<Nav />
			<button className="filterWrapper" onClick={() => setIsGreased(!isGreased)}>
				{isGreased ? "All hogs" : "Greased"}
			</button>				
			<button className="hide" onClick={() => setIsHide(!isHide)}>
				{isHide ? "Show Hogs" : "Hide Hogs"}
			</button>
			<label>
				Sort Hogs
				<select name="category"  className="sortSelection" onChange={(e) => setSelectSort(e.target.value)}>
					{sortCategories.map((category, index) => {
						return <option key={index}>{category}</option>
					})}
				</select>
			</label>
			{/* <br/> */}
			<NewHogAdd myHogs={myHogs} setMyHogs={setMyHogs}/>
			<div className="ui grid container">
				{handleHideClick()}
			</div>			
		</div>
	);
}

export default App;
