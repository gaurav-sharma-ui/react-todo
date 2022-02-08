import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    
    // * THIS IS 1 WAY TO WORK WITH STATES WHERE WE CAN USE useState MULTIPLE TIMES
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // * THIS IS 2nd WAY TO WORK WITH useState IN THIS WE USE IT JUST ONCE AND CREATE AN OBJECT INSIDE IT FOR MULTIPLE PLACES 
  /*  const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }) */
    // const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    //* This is also 1 way to reset the value of enteredTitle but make sure rest values are not overridden hence we used spred operator and then changed the necessary values
    /*
    setUserInput({...userInput,enteredTitle: event.target.value,}) 
    */
    // *this is the 2nd way which uses function, inside setUserInput. It uses the concept of prevState.
  /*   setUserInput((prevState) => {
        return {
            ...prevState,enteredTitle: event.target.value,
        }
    }) */
    // };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: +enteredAmount
        };
        props.onSaveExpenseData(expenseData);
        // console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        // hideForm(0);
    }

    // const [form, hideForm] = useState(0);
    
    // const showForm =() => {
    //     hideForm(prevState => {
    //         console.log(prevState);
    //         prevState === 0 ? hideForm(1) : hideForm(0)
    //     });
    // }
        {
           return (
               <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                       <button type="button" onClick={props.onCancel} className="">Cancel</button>
                        <button type="submit" className="">Add Expense</button>
                    </div>
            </form>  
           )
         }
}

export default ExpenseForm;