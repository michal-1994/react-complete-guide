import React from "react";

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    
    return (
        <Card className="expense-item">
            <ExpenseDate { ...props } />
            {/* <ExpenseDate date = { props.date } /> */}
            <div className="expanse-item__description">
                <h2>{ props.title }</h2>
                <div className="expanse-item__price">
                    ${ props.amount }
                </div>
            </div>
        </Card>   
    );
}

export default ExpenseItem;