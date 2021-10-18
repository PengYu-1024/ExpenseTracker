import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //useState can have mutiple in one component, they will be totally separeted to each other
  // its empty cus the initially when rendered this component, the form is empty
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  ////////////////////////////////////////////////////////////////////
  /* can be replace by:
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });*/

  const titleChangeHandler = (event) => {
    //event.target.value get the user inputs
    setEnteredTitle(event.target.value);

    /*if using the object approach(only one line of useState code);replace below
    ...userInput will get all 3 in the object. but setUserInput will just replace all values so its ok to call the old values first and the just replace the updated value
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    /IMPORTANT
    this is not good to use when the state is depending on other/previous states(...userInput)
    its better to pass a function inside the setUserInput().
    Cus the function will be the lastest snapshot of the previous state
    So below one is safer:    
    setUserInput((previousState)=>{
      return {
        ...previousState,
        enteredTitle: event.target.value,
      }
    })
*/
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //get from NewExpense.js

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className='new-expense__actions'>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
