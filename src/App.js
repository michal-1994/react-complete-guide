import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
	{ id: 'e1', title: 'Xero paper', amount: 12.64, date: new Date(2021, 2, 28) },
	{ id: 'e2', title: 'New Car Wheel', amount: 100.22, date: new Date(2020, 3, 28) },
	{ id: 'e3', title: 'Car Insurance', amount: 120.24, date: new Date(2019, 4, 28) },
	{ id: 'e4', title: 'New desk', amount: 51.25, date: new Date(2020, 5, 28) },
];

const App = () => {

	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	
	const addExpenseHandler = expense => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={ addExpenseHandler } />
			<Expenses items={ expenses } />
		</div>
	);
}

export default App;