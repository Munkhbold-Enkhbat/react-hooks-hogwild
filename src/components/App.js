import React, { useState } from "react";
import Nav from "./Nav";
import Hoglist from "./Hoglist";

import hogs from "../porkers_data";

function App() {
	// console.log("HOGS:", hogs);
	const [isGreased, setGreased] = useState(false)
	const [isHide, setIsHide] = useState(false)
	const [selectSort, setSelectSort] = useState('all')
	const sortCategories = ['all', 'name', 'weight']

	function handleGreasedBtnClick() {
		setGreased(!isGreased)
	}

	function handleHide() {
		setIsHide(!isHide)
	}

	function handleSort(e) {
		setSelectSort(e.target.value)
	}

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
			<button className="greased" onClick={handleGreasedBtnClick}>
				{isGreased ? "All hogs" : "Greased"}
			</button>				
			<button className="hide" onClick={handleHide}>
				{isHide ? "Show Hogs" : "Hide Hogs"}
			</button>
			<label>
				Sort Hogs
				<select name="category"  className="sortSelection" onChange={handleSort}>
					{sortCategories.map((category, index) => {
						return <option key={index}>{category}</option>
					})}
				</select>
			</label>
			{handleHideClick()}
		</div>
	);
}

export default App;
