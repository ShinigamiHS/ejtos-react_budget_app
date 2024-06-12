import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleChangeCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event,
        })
    }
    return (
        <div className='alert bg-info fs-6'>
            <label for='currencySelect'>Currency(</label>
            <select id='currencySelect' className=' bg-info border-info' data-bs-toggle="dropdown" onChange={(event) => handleChangeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£" selected>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Rupee</option>
            </select >
            <label for='currencySelect'>)</label>

        </div >
    );
};
export default Currency;