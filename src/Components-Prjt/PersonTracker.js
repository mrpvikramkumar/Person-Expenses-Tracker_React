import React, { useState } from 'react'
import PersonDate from './PersonDate';
import Card from './Card'
import './PersonTracker.css';

const PersonTracker =(props)=> {
  const[title, setTitle]= useState(props.title);

  const clickHandle = () =>{
    setTitle('Updated Value');
    // console.log(title);
  }
  return (
    <Card className='customer-item'>
      <PersonDate date={props.date} />
      <div className='customer-item__description'>
        <h2>{title}</h2>
        <div className='customer-item__price'>₹{props.amount}</div>
      </div>
      <button onClick={clickHandle}>Click to Change </button>
    </Card>
  );
}

export default PersonTracker;
