import React from 'react';

import ExpenseDate from './ExpenseDate'; //in same folder
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  /*this is just regurler javascript
  when have props, no need those anymore
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

  useState must be called inside component functions directly
  not in the nested function, not outside of the component function
  props.title is the inital value
  useState returns an array with exactly 2 elements
  the first value is the variable(value) itself. the second element in the array is the updating function
  use javascript array destructure to store the 2 return:

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated!');
  };
*/

  // <div className='expense-item'replace the <div> to <Card> cus card has the duplicated css style that all those componet used in commen
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          {/* <h2>{title}</h2> */}
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>

        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

//need to export
export default ExpenseItem;
