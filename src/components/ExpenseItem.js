import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    
    return (
        <div className="expense-item">
            <ExpenseDate { ...props } />
            {/* <ExpenseDate date = { props.date } /> */}
            <div className="expanse-item__description">
                <h2>{ props.title }</h2>
                <div className="expanse-item__price">
                    ${ props.amount }
                </div>
            </div>
        </div>   
    );
}

export default ExpenseItem;