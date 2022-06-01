import React, { useState } from "react";
import './PersonForm.css'
import './NewPerson.css'

const PersonForm = (props) =>{
    const[enterTitle, setEnterTitle] = useState('');
    const[enterAmount, setEnterAmount] = useState('');
    const[enterDate, setEnterDate] = useState('');

    const titleChanger = (event)=>{
    setEnterTitle(event.target.value);
    }

    const amountChanger = (event)=>{
        setEnterAmount(event.target.value);
    };

    const dateChanger = (event) => {
        setEnterDate(event.target.value);
    };

    const submitHandle = (event) =>{
        event.preventDefault();

        const personData ={
            title : enterTitle,
            amount : enterAmount,
            date : new Date(enterDate)
        };

        props.onSavePersonData(personData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    };
 



    return <form onSubmit={submitHandle}>
        <div className="new-person__controls">        
              <div className="new-person__control">
              <label>Title</label>
              <input type='text'value={enterTitle} onChange={titleChanger}/>
              </div>
              <div className="new-person__control">
              <label>Amount</label>
              <input type='number' value={enterAmount} onChange={amountChanger}/>
              </div>
              <div className="new-person__control">
              <label>Date</label>
              <input type='date' min='2020-01-01' max='2022-12-31'value={enterDate} onChange={dateChanger}/>
              </div>
        </div>
        <div className="new-person__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>

    </form>
};

export default PersonForm;