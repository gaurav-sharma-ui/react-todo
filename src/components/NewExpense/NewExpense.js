import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing,setIsEditing] = useState(false);

    // *this is a way to share data from child to parent: here we want data from expenseform that is child so we are declaring a function here and passing that function inside our custom elemet and from there we will get the value
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stoptEditingHandler = () => {
        setIsEditing(false);
    }
// *This is a short hand technique, if the 1st condition is true the staement after "&&" gets executed.
    return (
        <div className="new-expense">
             
            {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stoptEditingHandler}/>}
        </div>
    )
}

export default NewExpense;