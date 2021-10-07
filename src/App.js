import React from "react";

import Expenses from "./components/Expenses/Expenses";

const App = () => {
	
	const expenses = [
		{ id: 'e1', title: 'Xero paper', amount: 12.64, date: new Date(2021, 2, 28) },
		{ id: 'e2', title: 'New Car', amount: 1299.22, date: new Date(2021, 2, 28) },
		{ id: 'e3', title: 'Car Insurance', amount: 120.24, date: new Date(2021, 2, 28) },
		{ id: 'e4', title: 'New desk', amount: 98, date: new Date(2021, 2, 28) },
	];

	return (
		<div>
			<h2>Title</h2>
			<Expenses items={ expenses } />
		</div>
	);
}

export default App;