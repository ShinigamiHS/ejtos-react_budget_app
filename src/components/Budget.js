import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import { getValue } from '@testing-library/user-event/dist/utils';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if (event < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending")
        } else if(event < (budget - totalExpenses)) {
            alert("You cannot reduce the budget that is already allocated");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: parseInt(event),
            })
        }


    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={budget} onChange={(event)=>handleBudgetChange(event.target.value)}></input>
        </div>
    );
};
export default Budget;