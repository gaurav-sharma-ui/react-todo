import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';


function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title); // We have imported useState at top it is a function in React, then we are destructuing this and we are getting 2 values 1st is the set value and 2nd is the function used to set new value to this variable
    
    //It is a good practise to end our events with handler like this name "clickHandler"
    const clickHandler = () => {
        setTitle('Updated !');
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
                <button onClick={clickHandler}>Update Me!</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;
