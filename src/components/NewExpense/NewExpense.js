import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpesneDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() // This is not perfect but this is demo
        };
        props.onAddExpense(expenseData);
    };
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={ saveExpesneDataHandler } />
        </div>
    );
};

export default NewExpense;